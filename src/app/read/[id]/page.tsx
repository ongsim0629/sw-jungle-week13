'use client';

import { useAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { topicsAtom } from '@/app/atoms';

export default function Read() {
  const { id } = useParams();
  const [topics] = useAtom(topicsAtom);
  const [topic, setTopic] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopic() {
      try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`, {
          cache: 'no-store'
        });
        if (!resp.ok) throw new Error('Failed to fetch topic');
        const data = await resp.json();
        setTopic(data);
      } catch (error) {
        console.error('Error fetching topic:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTopic();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!topic) return <p>Topic not found</p>;

  return (
    <>
      <h2>{topic.title}</h2>
      <h3>{topic.user_name}</h3>
      <p>{topic.content}</p>
      <p>{topic.created_at}</p>
    </>
  );
}