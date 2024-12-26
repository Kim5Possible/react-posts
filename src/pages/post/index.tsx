import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import "./post.css";
import Loader from "../../components/Loader";

export default function Post() {
  const { id } = useParams();
  const { post, comments, loading, error } = usePost(id || "");

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-container">
      <Link to="/" className="back-link">
        ← Back to Posts
      </Link>

      <article className="post-article">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-body">{post.body}</p>
      </article>

      <section>
        <h2 className="comments-title">Comments</h2>
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <h3 className="comment-name">{comment.name}</h3>
              <p className="comment-email">{comment.email}</p>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
