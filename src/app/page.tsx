'use client';

import Image from 'next/image';
import type { Playlist } from './atoms';
import { useAtom } from 'jotai';
import { playlistsAtom, selectedPlaylistAtom, deletePlaylistAtom } from './atoms';
import Link from 'next/link';

export default function Playlist() {
  const [playlists] = useAtom(playlistsAtom);
  const [, setSelectedPlaylist] = useAtom(selectedPlaylistAtom);
  const [, deletePlaylist] = useAtom(deletePlaylistAtom);

  const handleDelete = async (playlistId: string, e: React.MouseEvent) => {
    e.stopPropagation();

    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    try {
      const resp = await fetch(`https://sunrise-abalone-fireplace.glitch.me/playlists/${playlistId}`, {
        method: 'DELETE',
      });

      if (!resp.ok) {
        throw new Error('삭제에 실패했습니다');
      }

      // Jotai action을 통한 상태 업데이트
      deletePlaylist(playlistId);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
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
            <Link href={`/update/${playlist.id}`}>
      <Image 
        src="/update.png"
        width={24}
        height={24}
        alt="수정"
        className="action-icon hover:opacity-80 transition-opacity"
        priority={false}
        style={{ width: '24px', height: 'auto', cursor: 'pointer'}}
      />
    </Link>
    <Image 
      src="/delete.png"
      width={24}
      height={24}
      alt="삭제"
      onClick={(e) => handleDelete(playlist.id, e)}
      priority={false}
      style={{ width: '24px', height: 'auto', cursor: 'pointer' }} 
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