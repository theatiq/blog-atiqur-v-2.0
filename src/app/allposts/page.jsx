"use client";
import Link from "next/link";
// Fetching all posts using async/await
import { useState, useEffect } from "react";

export default function Allposts() {
  const [posts, setPosts] = useState([]);

  // Fetch all posts
  const fetchAllPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-display-3">All Posts</h1>
      <div className="post-cards-container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h3 className="text-heading-2">{post.title}</h3>
            <p className="text-body-2">{post.body.slice(0, 100)}...</p>
            <Link href={`/allposts/${post.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
