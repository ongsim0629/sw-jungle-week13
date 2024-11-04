'use client';

import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { playlistsAtom, selectedPlaylistAtom } from './atoms';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Playlist() {
  const router = useRouter();
  const [playlists] = useAtom(playlistsAtom);
  const [, setSelectedPlaylist] = useAtom(selectedPlaylistAtom);
  const [isDeleting, setIsDeleting] = useState(false);
  const [localPlaylists, setLocalPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    setLocalPlaylists(playlists);
  }, [playlists]);

  const handleDelete = async (playlistId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDeleting) return;

    try {
      setIsDeleting(true);
      const resp = await fetch(`https://sunrise-abalone-fireplace.glitch.me/playlists/${playlistId}`, {
        method: 'DELETE',
      });

      if (!resp.ok) {
        throw new Error('삭제에 실패했습니다');
      }

      setLocalPlaylists((prev) => prev.filter((playlist) => playlist.id !== playlistId));

      setTimeout(() => {
        router.push('/');
      }, 200);
    } catch (error) {
      alert('플레이리스트 삭제에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCardClick = (playlist: Playlist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <div className="card-list">
      {localPlaylists.length > 0 ? (
        localPlaylists.map((playlist) => (
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
                disabled={isDeleting}
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
