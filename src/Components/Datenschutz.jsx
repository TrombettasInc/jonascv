import React from 'react';

const Datenschutz = () => {
  return (
    <div className='daten-container'>
      <h1 className='daten-h'>Datenschutzerklärung</h1>

      <section className='daten-section'>
        <h2 className='daten-htwo'>1. Verantwortlich für den Inhalt</h2>
        <p className='daten-p'>
          Verantwortlich für den Inhalt dieser Website:
          <br />[Name der verantwortlichen Person oder Organisation]
          <br />[Adresse]
          <br />[Telefonnummer]
          <br />[E-Mail-Adresse]
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>2. Zweck der Website</h2>
        <p className='daten-p'>
          Diese Website dient ausschließlich zu Informationszwecken. Es werden keine personenbezogenen Daten
          verarbeitet, gespeichert oder gesammelt.
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>3. Keine Datenverarbeitung</h2>
        <p className='daten-p'>
          Auf dieser Website werden keine personenbezogenen Daten erhoben, keine Cookies verwendet und keine
          Drittanbieter-Dienste eingebunden.
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>4. Server-Log-Dateien</h2>
        <p className='daten-p'>
          Beim Zugriff auf diese Website werden durch den Webhosting-Anbieter automatisch Informationen in sogenannten
          Server-Logfiles gespeichert. Diese beinhalten:
        </p>
        <ul className='daten-ul'>
          <li >Datum und Uhrzeit des Zugriffs</li>
          <li>Angeforderte Datei</li>
          <li>IP-Adresse des anfragenden Geräts</li>
          <li>Browsertyp und -version</li>
        </ul>
        <p className='daten-p'>
          Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website genutzt und
          nicht mit anderen Datenquellen zusammengeführt.
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>5. Rechte der Nutzer</h2>
        <p className='daten-p'>
          Nach der DSGVO haben Nutzer ein Recht auf:
        </p>
        <ul className='daten-ul'>
          <li>Auskunft über gespeicherte Daten</li>
          <li>Berichtigung oder Löschung personenbezogener Daten</li>
          <li>Einschränkung der Datenverarbeitung</li>
        </ul>
        <p className='daten-p'>
          Da diese Website jedoch keine personenbezogenen Daten sammelt, können keine solchen Ansprüche gestellt werden.
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>6. Hosting-Anbieter</h2>
        <p className='daten-p'>
          Diese Website wird gehostet von:
          <br />[Name des Hosting-Anbieters]
          <br />[Adresse des Anbieters]
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>7. Haftungsausschluss</h2>
        <p className='daten-p'>
          Diese Website kann Links zu externen Webseiten enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>8. SSL-Verschlüsselung</h2>
        <p className='daten-p'>
          Diese Website verwendet eine SSL-Verschlüsselung, um die Sicherheit der Datenübertragung zu gewährleisten.
        </p>
      </section>

      <section className='daten-section'>
        <h2 className='daten-htwo'>9. Änderungen der Datenschutzerklärung</h2>
        <p className='daten-p'>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um gesetzlichen Anforderungen zu
          entsprechen.
        </p>
      </section>
    </div>
  );
};

export default Datenschutz;