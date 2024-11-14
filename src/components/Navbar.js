import React from 'react';
import './Navbar.css';

function Navbar({ toggleDarkMode, isDarkMode }) {
  return (
    <nav className="navbar">
      <h1>SocialMedia</h1>
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Profile</li>
        <li>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
