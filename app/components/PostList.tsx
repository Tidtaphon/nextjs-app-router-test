"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(res.data);
    } catch (err) {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {posts.map((post: Post, idx: number) => (
        <div key={idx} style={{ marginBottom: 16 }}>
          <h3>
            ({post.id}) {post.title}
          </h3>
          {/* <p>{post.body}</p> */}
          <p style={{ whiteSpace: "pre-line" }}>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
