'use client';

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { playlistsAtom } from '../../atoms';

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [playlists, setPlaylists] = useAtom(playlistsAtom);
  const [formData, setFormData] = useState({
    title: '',
    channelName: '',
    thumbnail: ''
  });

  useEffect(() => {
    if (id) {
      fetchPlaylistData();
    }
  }, [id]);

  async function fetchPlaylistData() {
    try {
      const res = await fetch(`https://sunrise-abalone-fireplace.glitch.me/playlists/${id}`, {
        method: 'GET',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        const playlist = await res.json();
        setFormData({
          title: playlist.title || '',
          channelName: playlist.channelName || '',
          thumbnail: playlist.thumbnail || ''
        });
      } else {
        alert("Failed to fetch playlist data");
      }
    } catch (err) {
      alert("Error fetching playlist:");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const resp = await fetch(`https://sunrise-abalone-fireplace.glitch.me/playlists/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (resp.ok) {
        setPlaylists(prevPlaylists => prevPlaylists.map(
          playlist => playlist.id === id ? { ...playlist, ...formData } : playlist
        ));
        router.push('/');
      } else {
        alert("Failed to update playlist");
      }
    } catch (error) {
      alert("Error updating playlist:");
    }
  };

  return (
    <form id="updateForm" onSubmit={handleSubmit}>
      <h2>UPDATE</h2>
      <div id="updateInput">
        <input
          placeholder="Title"
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div id="updateInput">
        <input
          placeholder="Channel Name"
          id="channelName"
          name="channelName"
          type="text"
          value={formData.channelName}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input
          placeholder="Thumbnail URL"
          id="thumbnail"
          name="thumbnail"
          type="text"
          value={formData.thumbnail}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">업데이트</button>
      <button type="button" onClick={() => router.push('/')}>취소</button>
    </form>
  );
}
