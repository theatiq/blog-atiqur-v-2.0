"use client";

import { useParams } from "next/navigation";

// /pages/posts/[id].jsx
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  console.log(id);
  // const router = useRouter();
  // const { id } = router.query; // Get the dynamic id from URL
  const [post, setPost] = useState(null);

  // Fetch post details by ID
  const fetchPostDetails = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    if (id) {
      fetchPostDetails(id);
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>Post Details</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
