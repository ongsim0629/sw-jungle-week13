import { atom } from 'jotai';

export interface Playlist {
  id: string;
  title: string;
  channelName: string;
  thumbnail: string;
  url: string;
}

export const playlistsAtom = atom<Playlist[]>([]);
export const selectedPlaylistAtom = atom<Playlist | null>(null);
export const isPlayingAtom = atom(false);

// 삭제 액션
export const deletePlaylistAtom = atom(
  null,
  (get, set, playlistId: string) => {
    const playlists = get(playlistsAtom);
    const selectedPlaylist = get(selectedPlaylistAtom);
    
    // 플레이리스트 삭제
    set(playlistsAtom, playlists.filter(playlist => playlist.id !== playlistId));
    
    // 선택된 플레이리스트가 삭제되는 경우 선택 해제
    if (selectedPlaylist?.id === playlistId) {
      set(selectedPlaylistAtom, null);
      set(isPlayingAtom, false);
    }
  }
);