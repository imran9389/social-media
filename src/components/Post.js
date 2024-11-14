import React, { useState } from 'react';
import './Post.css';

function Post({ post, onLike, onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <div>
          <h3>{post.username}</h3>
          <p className="timestamp">{post.time}</p>
        </div>
      </div>
      <p>{post.content}</p>
      <button onClick={() => onLike(post.id)}>👍 Like {post.likes}</button>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Comment</button>
      </form>
      <div className="comments">
        {post.comments.map((comment, index) => (
          <div className="comment-card" key={index}>
            <div className="avatar">{comment[0]}</div>
            <p className="comment-text">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
