'use client';

import type { Playlist } from './atoms';
import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { playlistsAtom, selectedPlaylistAtom } from './atoms';
import Link from 'next/link';

export default function Playlist() {
  const router = useRouter();
  const [playlists, setPlaylists] = useAtom(playlistsAtom);
  const [, setSelectedPlaylist] = useAtom(selectedPlaylistAtom);

  const handleDelete = async (playlistId: string, e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const resp = await fetch(`https://sunrise-abalone-fireplace.glitch.me/playlists/${playlistId}`, {
        method: 'DELETE',
      });

      if (!resp.ok) {
        throw new Error('삭제에 실패했습니다');
      }

      // Jotai atom 상태 업데이트
      setPlaylists((prev) => prev.filter((playlist) => playlist.id !== playlistId));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCardClick = (playlist: Playlist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <div className="card-list">
      {playlists.length > 0 ? (
        playlists.map((playlist) => (
          <div 
            key={playlist.id} 
            className="card"
            onClick={() => handleCardClick(playlist)}
          >
            {playlist.thumbnail && (
              <img 
                src={playlist.thumbnail} 
                alt={`${playlist.title} 썸네일`} 
                className="card-thumbnail"
              />
            )}
            <h3 className="card-title">{playlist.title}</h3>
            <p className="card-channel">{playlist.channelName}</p>
            <div className="card-actions">
              <Link 
                href={`/update/${playlist.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src="/update.png" 
                  alt="수정" 
                  className="action-icon" 
                  style={{ width: "24px", cursor: "pointer" }}
                />
              </Link>
              <img 
                src="/delete.png" 
                alt="삭제" 
                onClick={(e) => handleDelete(playlist.id, e)}
                className="action-icon"
                style={{ width: "24px", cursor: "pointer" }}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="no-playlists">플레이리스트가 없습니다.</p>
      )}
      
      <Link href="/create">
        <div className="card plus-card">
          <img 
            src="/plus.png" 
            alt="새로운 플레이리스트 추가" 
            className="card-thumbnail"
          />
          <p>새로운 플레이리스트 만들기</p>
        </div>
      </Link>
    </div>
  );
}