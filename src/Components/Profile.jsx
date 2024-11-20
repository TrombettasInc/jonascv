import React from 'react'
import { FcCheckmark } from "react-icons/fc";

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='avatar-container'>
        <img className='profile-avatar' src="../src/assets/avatar.jpg" alt="avatar" />
      </div>
      <div className='profile-card'>
        <h1 className='profile-name'>Jonas Dobrint</h1>
        <ul className="profile-list">
          <li className="profile-item">
            <FcCheckmark className="profile-icon" />
            <span className="profile-text">Qualification 1</span>
          </li>
          <li className="profile-item">
            <FcCheckmark className="profile-icon" />
            <span className="profile-text">Qualification 2</span>
          </li>
          <li className="profile-item">
            <FcCheckmark className="profile-icon" />
            <span className="profile-text">Qualification 3</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Profile