'use client';

import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { playlistsAtom } from '../atoms';

export default function Create() {
  const router = useRouter();
  const [playlists, setPlaylists] = useAtom(playlistsAtom);

  // Youtube api로 db에 저장할 정보 가져오기
  const getYoutubeData = async (id: string) => {
    try {
      const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet`);
      const data = await res.json();
      return data.items[0]?.snippet;
    } catch (err) {
      alert(`${err}`);
      return null;
    }
  };

  // 유튜브 URL 유효성 검사
  const isValidYoutubeUrl = (url: string) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([^&]{11})/;
    return regex.test(url);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const url = evt.currentTarget.url.value;

    if (!isValidYoutubeUrl(url)) {
      alert('유효한 YouTube URL을 입력하세요.');
      return;
    }

    // 이미 존재하는 URL인지 체크
    const existingPlaylist = playlists.find(playlist => playlist.url === url);
    if (existingPlaylist) {
      alert('이 URL은 이미 존재하는 플레이리스트입니다.');
      return;
    }

    // 유효성 검사 모두 통과하면 유튜브 api로 db에 저장할 정보 획득
    const id = url.split('v=')[1]?.split('&')[0];
    const youtubeData = await getYoutubeData(id);

    if (!youtubeData) {
      alert('URL에서 정보를 불러오는데 실패 했어요!');
      return;
    }

    const title = youtubeData.title;
    const channelName = youtubeData.channelTitle;
    const thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

    const newPlaylist = {
      id,
      title,
      channelName,
      thumbnail,
      url,
    };

    try {
      const res = await fetch(`https://sunrise-abalone-fireplace.glitch.me/playlists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlaylist),
      });
      
      if (!res.ok) throw new Error('Failed to create playlist');
      
      const createdPlaylist = await res.json();
      
      setPlaylists(prevPlaylists => [...prevPlaylists, createdPlaylist]);

      router.push('/');
      router.refresh();
    } catch (error) {
      alert(`영상을 추가하는데 오류가 발생했어요${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create</h2>
      <p><input type="text" name="url" placeholder="YouTube URL" required /></p>
      <p><input type="submit" value="Create" /></p>
    </form>
  );
}
