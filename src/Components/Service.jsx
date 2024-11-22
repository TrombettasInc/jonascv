import React from 'react';
import { FaListAlt } from 'react-icons/fa';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-content">
        <div className="service-info">
          <div className="service-text">
            <h2>Unsere Leistungen im Überblick</h2>
            <div className="service-icon">
            <FaListAlt size={50} />
          </div>
            <ul className="service-list">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nulla facilisi. Praesent commodo cursus magna.</li>
              <li>Curabitur blandit tempus porttitor.</li>
            </ul>
          </div>
        </div>
        <div className="service-image">
          <img src="./src/assets/biogas7.jpeg" alt="Service Beispiel" />
        </div>
      </div>
    </div>
  );
};

export default Service;
