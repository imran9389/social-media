import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="avatar-lg">U</div>
        <h2>UserName</h2>
      </div>
      <div className="stats">
        <div className="stat">
          <span>10</span>
          <p>Posts</p>
        </div>
        <div className="stat">
          <span>200</span>
          <p>Likes</p>
        </div>
        <div className="stat">
          <span>150</span>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
