import './globals.css';
import { PlaylistsProvider } from './playlistsProvider';
import YouTubeControl from './YotubeControl';
import Sidebar from './sidebar';  // 새로 만들 컴포넌트

export const metadata = {
  title: 'Music Player For Youtube',
  description: '킹옹심',
};

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
  const resp = await fetch(`https://sunrise-abalone-fireplace.glitch.me/playlists`, { cache: 'no-store' });
  const playlists = await resp.json();

  return (
    <html>
      <head />
      <body>
        <div id="container">
          <PlaylistsProvider initialPlaylists={playlists}>
            <Sidebar />
            <main>
              {children}
            </main>
          </PlaylistsProvider>
        </div>

        <footer>
          <YouTubeControl />
        </footer>
      </body>
    </html>
  );
}