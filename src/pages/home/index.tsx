import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import "./home.css";
import Loader from "../../components/Loader";

export default function Home() {
  const { posts, loading, error } = usePosts();
  const [currentRows, setCurrentRows] = useState<number>(3);
  const postsPerRow = 3;
  const handleLoadMore = () => {
    setCurrentRows((prevRows: number) => prevRows + postsPerRow);
  };
  const visiblePosts = posts.slice(0, currentRows * postsPerRow);
  const hasMorePosts = visiblePosts.length < posts.length;

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="posts-container">
      <h1 className="posts-title">Posts</h1>
      <div className="posts-grid">
        {visiblePosts.map((post) => (
          <div key={post.id} className="post-card">
            <h2 className="post-card-title">{post.title}</h2>
            <p className="post-card-body">{post.body}</p>
            <Link to={`/post/${post.id}`} className="read-more-link">
              Read more
            </Link>
          </div>
        ))}
      </div>
      {hasMorePosts && (
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      )}
    </div>
  );
}
