"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { useState } from "react";
import { topicsAtom } from "./atoms";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [topics, setTopics] = useAtom(topicsAtom); // Atom을 가져옵니다.
  const [password, setPassword] = useState("");

  const handleDelete = async () => {
    if (!password) {
      alert("비밀번호를 입력하세요.");
      return;
    }

    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: id,
          user_password: password,
        }),
      });

      if (!resp.ok) {
        throw new Error(`Failed to delete topic with ID: ${id}`);
      }

      // 삭제 성공 후 topicsAtom에서 해당 토픽 삭제
      setTopics((prevTopics) => prevTopics.filter((topic) => topic._id !== id));

      // 홈으로 리디렉션
      router.push("/");
      router.refresh();
      console.log("삭제 성공");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("주제 삭제에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>update</Link>
          </li>
          <li>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleDelete}>delete</button>
          </li>
        </>
      ) : null}
    </ul>
  );
}