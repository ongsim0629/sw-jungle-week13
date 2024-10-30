'use client';
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Update() {
  const router = useRouter();
  const params = useParams();  
  const id = params.id;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 데이터 가져오기
  useEffect(() => {
    async function fetchTopic() {
      if (!id) return;

      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, {
        cache: 'no-cache',
      });
      const topic = await resp.json();
      setTitle(topic.title);
      setBody(topic.body);
    }

    fetchTopic();
  }, [id]);

  return (
    <form onSubmit={async (evt) => {
      evt.preventDefault();
      const title = evt.target.title.value;
      const body = evt.target.body.value;

      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });

      if (resp.ok) {
        const topic = await resp.json();
        router.push(`/read/${topic.id}`);
        router.refresh();
      } else {
        console.error("Failed to update topic");
      }
    }}>
      <h2>Update</h2>
      <p>
        <input 
          type="text" 
          name="title" 
          placeholder="title" 
          onChange={e => setTitle(e.target.value)} 
          value={title} 
        />
      </p>
      <p>
        <textarea 
          name="body" 
          placeholder="body" 
          onChange={e => setBody(e.target.value)} 
          value={body} 
        />
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}