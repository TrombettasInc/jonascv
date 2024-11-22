import React from "react";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Menu */}
      <nav className="menu">
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


