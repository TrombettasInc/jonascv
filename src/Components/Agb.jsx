import React from "react";

const AGB = () => {
  return (
    <div className="agb-container">
      <h1 className="agb-title">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <section className="agb-section">
        <h2 className="agb-subtitle">1. Geltungsbereich</h2>
        <p className="agb-text">
          Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Beratungs- und Auditleistungen,
          die über [Name der Firma] (im Folgenden "wir" oder "uns") für Unternehmen im Bereich Biogas angeboten werden.
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">2. Vertragspartner</h2>
        <p className="agb-text">
          Der Vertrag kommt zustande mit:
          <br />
          [Name der Firma] <br />
          [Adresse der Firma] <br />
          [Telefonnummer] <br />
          [E-Mail-Adresse]
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">3. Vertragsgegenstand</h2>
        <p className="agb-text">
          Wir bieten Beratungs- und Auditleistungen für Unternehmen im Bereich Biogas an. Die genaue Leistungsbeschreibung
          und der Umfang der Beratung oder des Audits werden im jeweiligen Vertrag festgelegt.
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">4. Preise und Zahlung</h2>
        <p className="agb-text">
          Alle Preise sind in Euro (€) angegeben und verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. Die Zahlung
          erfolgt per Überweisung oder gemäß den im Vertrag vereinbarten Zahlungsmethoden.
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">5. Leistungszeitraum</h2>
        <p className="agb-text">
          Der Leistungszeitraum wird im jeweiligen Vertrag festgelegt. Änderungen oder Erweiterungen des Zeitrahmens
          bedürfen der schriftlichen Zustimmung beider Parteien.
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">6. Widerrufsrecht</h2>
        <p className="agb-text">
          Der Kunde hat das Recht, den Vertrag innerhalb von 14 Tagen nach Vertragsabschluss ohne Angabe von Gründen zu
          widerrufen. Der Widerruf muss schriftlich erfolgen.
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">7. Haftung und Gewährleistung</h2>
        <p className="agb-text">
          Wir haften nur für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz unsererseits verursacht wurden. Eine
          weitergehende Haftung, insbesondere für Schäden, die durch die Nutzung der Auditergebnisse entstehen, wird
          ausgeschlossen.
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">8. Datenschutz</h2>
        <p className="agb-text">
          Wir erheben und verarbeiten personenbezogene Daten gemäß unserer Datenschutzerklärung, die auf unserer Website
          einsehbar ist. Die Daten werden nur für die Durchführung des Auftrags genutzt.
        </p>
      </section>

      <section className="agb-section">
        <h2 className="agb-subtitle">9. Schlussbestimmungen</h2>
        <p className="agb-text">
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist [Ort des Unternehmens]. Sollte eine
          Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </section>
    </div>
  );
};

export default AGB;
