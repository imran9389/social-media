import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Profile from './components/Profile';
import NewPostModal from './components/NewPostModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, username: 'User1', content: 'Hello World!', likes: 0, comments: [], time: '2 hours ago' },
    { id: 2, username: 'User2', content: 'React is awesome!', likes: 0, comments: [], time: '4 hours ago' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const addComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  const addNewPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      username: 'NewUser',
      content,
      likes: 0,
      comments: [],
      time: 'Just now',
    };
    setPosts([newPost, ...posts]);
    toggleModal();
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} toggleModal={toggleModal} />
      <Profile />
      <div className="hero">
        <h1>Welcome to SocialMedia</h1>
        <p>Share your thoughts and connect with friends.</p>
      </div>
      <div className="post-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} onLike={handleLike} onAddComment={addComment} />
        ))}
      </div>
      {isModalOpen && <NewPostModal onClose={toggleModal} onSubmit={addNewPost} />}
    </div>
  );
}

export default App;
