import React from 'react'
import avatar from "../assets/avatar.jpg"

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='avatar-container'>
        <img className='profile-avatar' src={avatar} alt="avatar" />
      </div>
      <div className='profile-card'>
        <h1 className='profile-name'>Jonas Dobrindt</h1>
        <ul className="profile-list">
          <li className="profile-item">
            <span className="profile-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 1</span>
          </li>
          <li className="profile-item">
            
            <span className="profile-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  2</span>
          </li>
          <li className="profile-item">
            
            <span className="profile-text">Lorem ipsum dolor sit amet, consectetur  3</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Profile