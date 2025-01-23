"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  // Fetch post details by ID
  const fetchPostDetails = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPostDetails(id);
    }
  }, [id]);

  if (!post) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Post Details</h1>
      <div style={styles.card}>
        <h2 style={styles.postTitle}>{post.title}</h2>
        <p style={styles.postBody}>{post.body}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "left",
  },
  postTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#222",
    marginBottom: "15px",
  },
  postBody: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#555",
  },
  loading: {
    textAlign: "center",
    fontSize: "1.5rem",
    marginTop: "50px",
    color: "#888",
  },
};

export default PostDetails;
