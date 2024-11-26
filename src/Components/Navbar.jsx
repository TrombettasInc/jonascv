import React from "react";

const Navbar = ({ refs }) => {
  const scrollToSection = (sectionKey) => {
    const element = refs[sectionKey]?.current;
    if (element) {
      
      if (sectionKey === "contact") {
        
        const offset = 220; 
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      } else {
        
        element.scrollIntoView({
          behavior: "smooth",
          block: "center", 
          inline: "nearest",
        });
      }
    }
  };

  return (
    <div className="navbar">
      {/* Menu */}
      <nav className="menu">
        <ul>
          <li onClick={() => window.scrollTo(0, 0)}>Startseite</li>
          <li onClick={() => scrollToSection("profile")}>Über uns</li>
          <li onClick={() => scrollToSection("service")}>Dienstleistung</li>
          <li onClick={() => scrollToSection("contact")}>Kontakt</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
