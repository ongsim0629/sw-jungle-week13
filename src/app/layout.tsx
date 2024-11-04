import Link from 'next/link';
import './globals.css';
import { PlaylistsProvider } from './playlistsProvider';
import YouTubeControl from './YotubeControl';

export const metadata = {
  title: 'Music Player For Youtube',
  description: '킹옹심',
};

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}playlists`, { cache: 'no-store' });
  const playlists = await resp.json();

  return (
    <html>
      <head />
      <body>
        <div id="container">
          <aside>
            <h2>
              <Link href="/">Music Player</Link>
            </h2>
            <h3>Playlists</h3>
            <ul>
              {playlists.map((playlist: { id: string; title: string }, index: number) => (
                <li key={playlist.id}>
                  <span>{index + 1}.</span> {playlist.title}
                </li>
              ))}
            </ul>
          </aside>

          <main>
            <PlaylistsProvider initialPlaylists={playlists}>
              {children}
            </PlaylistsProvider>
          </main>
        </div>

        <footer>
          <YouTubeControl />
        </footer>
      </body>
    </html>
  );
}
