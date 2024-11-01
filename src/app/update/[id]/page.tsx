'use client';
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { topicsAtom } from '@/app/atoms';

export default function Update() {
  const router = useRouter();
  const params = useParams();  
  const id = params.id;

  const [topics, setTopics] = useAtom(topicsAtom); // Atom을 가져옵니다.
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [password, setPassword] = useState('');

  // 데이터 가져오기
  useEffect(() => {
    async function fetchTopic() {
      if (!id) return;

      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`, {
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

      if (!password) {
        alert("비밀번호를 입력하세요.");
        return;
      }

      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_id: id,
          title,
          content: body,
          user_password: password,
        }),
      });

      if (resp.ok) {
        const updatedTopic = await resp.json();
        console.log("Updated topic:", updatedTopic);

        // Atom에서 주제를 업데이트
        setTopics((prevTopics) =>
          prevTopics.map((topic) => (topic._id === id ? updatedTopic : topic))
        );

        router.push(`/read/${id}`);
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
        <input 
          type="password" 
          placeholder="비밀번호 입력" 
          onChange={e => setPassword(e.target.value)} 
          value={password} 
        />
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}