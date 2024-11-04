import { atom } from 'jotai';

export interface Playlist {
  id: string;
  title: string;
  channelName: string;
  thumbnail: string;
}

export const playlistsAtom = atom<Playlist[]>([]);
export const selectedPlaylistAtom = atom<Playlist | null>(null);
export const isPlayingAtom = atom(false);