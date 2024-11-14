import React, { useState } from 'react';
import './NewPostModal.css';

function NewPostModal({ onClose, onSubmit }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            rows="4"
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default NewPostModal;
