"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  // 비밀번호 상태 관리
  const [password, setPassword] = useState("");

  const handleDelete = async () => {
    if (!password) {
      alert("비밀번호를 입력하세요.");
      return;
    }

    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // JSON 형식으로 요청 본문을 보냄
        },
        body: JSON.stringify({
          post_id: id,           // 삭제할 포스트의 ID
          user_password: password, // 입력받은 비밀번호
        }),
      });

      if (!resp.ok) {
        throw new Error(`Failed to delete topic with ID: ${id}`);
      }

      // 삭제 성공 후 홈으로 리디렉션
      router.push('/');
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
            {/* 비밀번호 입력 필드 추가 */}
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
            />
            <button onClick={handleDelete}>
              delete
            </button>
          </li>
        </>
      ) : null}
    </ul>
  );
}