"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

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
            <button
              onClick={async () => {
                try {
                  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, {
                    method: 'DELETE',
                  });
                  
                  if (!resp.ok) {
                    throw new Error(`Failed to delete topic with ID: ${id}`);
                  }

                  // 삭제 성공 후 홈으로 리디렉션
                  router.push('/');
                  router.refresh();
                } catch (error) {
                  console.error("Delete failed:", error);
                  alert("Failed to delete the topic. Please try again.");
                }
              }}
            >
              delete
            </button>
          </li>
        </>
      ) : null}
    </ul>
  );
}
