import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ refs }) => {
  const navigate = useNavigate(); 

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

  const handleNavigation = (sectionKey) => {
    
    navigate("/");

   
    setTimeout(() => {
      scrollToSection(sectionKey);
    }, 0); 
  };

  return (
    <div className="navbar">
      <nav className="menu">
        <ul>
          <li onClick={() => navigate("/")}>Startseite</li>
          <li onClick={() => handleNavigation("profile")}>Über uns</li>
          <li onClick={() => handleNavigation("service")}>Dienstleistung</li>
          <li onClick={() => handleNavigation("contact")}>Kontakt</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
