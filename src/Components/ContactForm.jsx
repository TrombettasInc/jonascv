import React, { useState, useRef } from 'react';

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    request: '',
    additionalInfo: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
  };

  return (
    <>
  
  
    <div className="form-container">
      <h1>Anfrageformular</h1>

      
      <p>Hinweis: Die Abgabe einer Anfrage ist für Sie unverbindlich und kostenlos!</p>
      <form onSubmit={handleSubmit}>
        <div className="personal-data">
          <label>Vorname</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        
        <div className="personal-data">
          <label>Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="personal-data">
          <label>Telefon *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="personal-data">
          <label>E-Mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>In welcher Stadt befindet sich Ihr Unternehmen?*</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ihre Anfrage *</label>
          <textarea
            name="request"
            value={formData.request}
            onChange={handleChange}
            required
          ></textarea>
        </div>


        <div className="form-group">
          <button className='button-form' type="submit">Unverbindliche Anfrage senden</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ContactForm;