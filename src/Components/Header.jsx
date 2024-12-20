import React from 'react'
import Navbar from './Navbar'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import biogas8 from "../assets/biogas8.jpg"
import logo from "../assets/logo.png"

const Header = () => {

  const email = "jonas.d2@hotmail.de"
  const phone = "+49 0 15206401530"

  return (
    <>
    <div className='header-main'>
    <header className="header-container">
      <div className="header-content">
      <img className='logo' src={logo} alt="logo" />
        <div className="contact-info">
        <FaEnvelope className='icons-header'/>
          <a href={`mailto:${email}`} className="contact-link">
            {email}
          </a>
         <div className='contact-info'>
          <FaPhone className='icons-header'/>
          <a href={`tel:${phone}`} className="contact-link">
            {phone}
          </a>
          </div>
          <Navbar /> 
      </div>
      </div>
    </header>
    <div className='photo'>
      <img src={biogas8} alt="photo" />
    </div>
    </div>
    
    </>
  )
}

export default Header