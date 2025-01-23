"use client";
import Link from "next/link";
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
    <div style={styles.container}>
      <h1 style={styles.title}>All Posts</h1>
      <div style={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{post.title}</h3>
            {/* <p style={styles.cardBody}>
              {post.body.slice(0, 100)}...
            </p> */}
            <Link href={`/allposts/${post.id}`} style={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  cardBody: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#007bff",
    padding: "10px 15px",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

// Add hover effects dynamically using JavaScript
if (typeof window !== "undefined") {
  document.addEventListener("mouseover", (event) => {
    if (event.target.matches("[href]")) {
      event.target.style.backgroundColor = styles.buttonHover.backgroundColor;
    }
  });
  document.addEventListener("mouseout", (event) => {
    if (event.target.matches("[href]")) {
      event.target.style.backgroundColor = styles.button.backgroundColor;
    }
  });
}
