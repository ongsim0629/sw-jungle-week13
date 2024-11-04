'use client';
import { useAtom } from 'jotai';
import { isPlayingAtom, selectedPlaylistAtom } from './atoms';

export default function YouTubeControl() {
    const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
    const [selectedPlaylist] = useAtom(selectedPlaylistAtom);

    const togglePlay = () => {
        const iframe = document.getElementById('video') as HTMLIFrameElement;
        if (!iframe) return;

        setIsPlaying(!isPlaying);

        const action = isPlaying ? 'pauseVideo' : 'playVideo';
        iframe.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: action, args: '' }), '*'
        );
    };

    return (
        <div className="youtubeControl">
            {selectedPlaylist && (
                <div className="controlContent">
                    <img src={selectedPlaylist.thumbnail} alt="YouTube Thumbnail" />
                    <div className="playlistInfo">
                        <h3 className="videoTitle">{selectedPlaylist.title}</h3>
                        <p className="channelName">{selectedPlaylist.channelName}</p>
                    </div>
                    <button onClick={togglePlay}>
                        <img
                            id="toggle"
                            src={isPlaying ? '/pause.png' : '/play.png'}
                            alt={isPlaying ? 'Pause Video' : 'Play Video'}
                            style={{ width: '30px', height: '30px' }}
                        />
                    </button>
                </div>
            )}
            {selectedPlaylist && (
                <iframe
                    id="video"
                    src={`https://www.youtube.com/embed/${selectedPlaylist.id}?enablejsapi=1`}
                    allow="autoplay;"
                />
            )}
            {!selectedPlaylist && <p>재생을 원하는 플레이리스트를 클릭해주세요!</p>}
        </div>
    );
}