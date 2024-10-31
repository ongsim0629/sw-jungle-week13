'use client';

import { useRouter } from "next/navigation";
import { useAtom } from 'jotai';
import { topicsAtom } from '../atoms';

export default function Create() {
  const router = useRouter();
  const [topics, setTopics] = useAtom(topicsAtom);

  return (
    <form onSubmit={async (evt) => {
      evt.preventDefault();
      const title = evt.target.title.value;
      const content = evt.target.content.value;
      const user_name = evt.target.user_name.value;
      const user_password = evt.target.user_password.value;

      try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content, user_name, user_password }),
        });
        
        if (!resp.ok) throw new Error('Failed to create post');
        
        const newTopic = await resp.json();
        
        // API 응답에서 받은 데이터로 새로운 topic 객체 생성
        const formattedTopic = {
          _id: newTopic.id,
          title,
          content,
          user_name,
          created_at: new Date().toISOString(),
        };
        
        // topics 상태 업데이트
        setTopics(prevTopics => [...prevTopics, formattedTopic]);
        
        // 서버에서 최신 목록을 가져오기
        const updatedTopicsResp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/list`);
        const updatedTopics = await updatedTopicsResp.json();
        setTopics(updatedTopics.data); // Atom 상태를 업데이트
        
        // 생성된 게시글로 이동
        router.push(`/read/${newTopic.id}`);
        router.refresh();
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }}>
      <h2>Create</h2>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><input type="text" name="user_name" placeholder="user_name" /></p>
      <p><input type="password" name="user_password" placeholder="user_password" /></p>
      <p><textarea name="content" placeholder="content"></textarea></p>
      <p><input type="submit" value="create" /></p>
    </form>
  );
}