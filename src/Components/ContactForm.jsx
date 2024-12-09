import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    VollständigerName: "",
    Firmenname: "",
    Telefon: "",
    Email: "",
    Stadt: "",
    Anfrage: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSuccess = () => {
    // Mostra o pop-up de sucesso
    alert("Ihre Anfrage wurde erfolgreich gesendet!");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Anfrageformular</h1>
      <p className="form-subtitle">
        Hinweis: Die Abgabe einer Anfrage ist für Sie unverbindlich und
        kostenlos!
      </p>
      <form
        action="https://formsubmit.co/jonas.d2@hotmail.de"
        method="POST"
        onSubmit={(e) => {
          handleFormSuccess();
        }}
      >
        <div className="personal-data-container">
          <div className="personal-data">
            <label className="form-label">Vollständiger Name *</label>
            <input
              type="text"
              name="VollständigerName"
              value={formData.completeName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="personal-data">
            <label className="form-label">Firmenname *</label>
            <input
              type="text"
              name="Firmenname"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="personal-data">
            <label className="form-label">Telefon *</label>
            <input
              type="tel"
              name="telefon"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="personal-data">
            <label className="form-label">E-Mail *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            In welcher Stadt befindet sich Ihr Unternehmen?*
          </label>
          <input
            type="text"
            name="Stadt"
            value={formData.city}
            onChange={handleChange}
            required
            className="form-city"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Ihre Anfrage *</label>
          <textarea
            name="Anfrage"
            value={formData.request}
            onChange={handleChange}
            required
            className="form-textarea"
          ></textarea>
        </div>

        <input type="hidden" name="_autoresponse" value="Danke, dass Sie Jonas Dobrindt kontaktiert haben. Wir haben Ihre Anfrage erhalten und werden uns so schnell wie möglich bei Ihnen melden."/>
        <input type="hidden" name="_template" value="table"/>
        <input type="hidden" name="_next" value="http://localhost:5173/" />

        <div className="form-group">
          <button className="button-form" type="submit">
            Unverbindliche Anfrage senden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
