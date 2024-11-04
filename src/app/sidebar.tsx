'use client';

import { useAtom } from 'jotai';
import Link from 'next/link';
import { playlistsAtom } from './atoms';

export default function Sidebar() {
  const [playlists] = useAtom(playlistsAtom);

  return (
    <aside>
      <h2>
        <Link href="/">Music Player</Link>
      </h2>
      <h3>Playlists</h3>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={playlist.id}>
            <span>{index + 1}.</span> {playlist.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}