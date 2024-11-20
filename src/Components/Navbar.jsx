import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {

      setIsMenuOpen(!isMenuOpen);
    };

  return (
<div className="hamburger-menu">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
      {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu */}
      <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
