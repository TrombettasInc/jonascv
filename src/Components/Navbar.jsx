import React from "react";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Menu */}
      <nav className="menu">
        <ul>
          <li><a href="/">Startseite</a></li>
          <li><a href="/profile">Über uns</a></li>
          <li><a href="/service">Dienstleistung</a></li>
          <li><a href="/contact">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


