import React from "react";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Menu */}
      <nav className="menu">
        <ul>
          <li><a href="#">Startseite</a></li>
          <li><a href="#">Über uns</a></li>
          <li><a href="#">Dienstleistung</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


