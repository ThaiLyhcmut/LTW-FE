"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { createComment, getComment } from "../../api/comment.api";

interface Comment {
  id: number;
  username: string;
  content: string;
  created_at: string;
}

export default function Comment({ id }: { id : string }) {
  const { auth } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
	useEffect(() => {
		const getData = async () => {
			const comment = await getComment(id);
			if (comment !== undefined) {
				setComments(comment)
			}
		}
		getData()
	}, [])
  const handleComment = async (event: any) => {
		event.preventDefault();
    if (text.trim() === "") return;
    const newComment: Comment = {
      id: comments.length + 1,
      username: auth?.username || "Guest",
      content: text,
      created_at: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setText("");
		const saveData = await createComment(id, text);
		if (saveData === undefined) {
			alert("save comment error");
		}
  };


  return (
    <div className="w-full mt-6 p-4 bg-gray-100 rounded-lg text-black">
      <h3 className="text-lg font-semibold mb-3">Bình luận</h3>

      {/* Input Comment */}
      <form className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Nhập bình luận..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg"
        />
        <button
          onClick={handleComment}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Gửi
        </button>
      </form>

      {/* Danh sách comment */}
      <div className="mt-4 space-y-3 text-black">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="p-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm font-semibold">{c.username}</p>
              <p>{c.content}</p>
              <p className="text-xs text-gray-500">{c.created_at}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">Chưa có bình luận nào.</p>
        )}
      </div>
    </div>
  );
}
