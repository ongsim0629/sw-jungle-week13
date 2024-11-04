'use client';

import { ReactNode } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { playlistsAtom, Playlist } from './atoms';

interface PlaylistsProviderProps {
  initialPlaylists: Playlist[]; 
  children: ReactNode;
}

export function PlaylistsProvider({ initialPlaylists, children }: PlaylistsProviderProps) {
  useHydrateAtoms([[playlistsAtom, initialPlaylists]]);
  return <>{children}</>;
}