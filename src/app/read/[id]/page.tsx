'use client';

import { useParams } from "next/navigation";
import React, { useEffect, useState } from 'react';

export default function Read() {
  const params = useParams();  // React.use() 제거
  const id = params.id;

  const [topic, setTopic] = useState<{ title: string; user_name: string; created_at: string; } | null>(null);

  useEffect(() => {
    async function fetchTopic() {
      if (!id) return;

      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`, {
        cache: 'no-store'
      });
      const data = await resp.json();
      setTopic(data);
    }

    fetchTopic();
  }, [id]);

  if (!topic) return <p>Loading...</p>;

  return (
    <>
      <h2>{topic.title}</h2>
      <h2>{topic.user_name}</h2>
      <p>{topic.created_at}</p>
    </>
  );
}