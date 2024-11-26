import React from "react";


const Impressum = () => {
  return (
    <div className="impressum-container">
      <h1 className="impressum-title">Impressum</h1>

      <section className="impressum-section">
        <h2 className="impressum-subtitle">Angaben gemäß § 5 TMG</h2>
        <p className="impressum-text">
          [Name des Unternehmens] <br />
          [Rechtsform des Unternehmens] <br />
          [Vertreten durch: Name des Vertreters] <br />
          [Adresse: Straße, PLZ, Stadt] <br />
          [Telefonnummer] <br />
          [E-Mail-Adresse] <br />
          [USt-IdNr.] <br />
        </p>
      </section>

      <section className="impressum-section">
        <h2 className="impressum-subtitle">Verantwortlich für den Inhalt nach 55 RStV</h2>
        <p className="impressum-text">
          [Name des Vertreters] <br />
          [Adresse des Unternehmens] <br />
        </p>
      </section>

      <section className="impressum-section">
        <h2 className="impressum-subtitle">Haftungsausschluss</h2>
        <p className="impressum-text">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs. 1
          TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
          sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section className="impressum-section">
        <h2 className="impressum-subtitle">Haftung für Links</h2>
        <p className="impressum-text">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
          können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </section>

      <section className="impressum-section">
        <h2 className="impressum-subtitle">Urheberrecht</h2>
        <p className="impressum-text">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section className="impressum-section">
        <h2 className="impressum-subtitle">Datenschutzerklärung</h2>
        <p className="impressum-text">
          Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung, die ebenfalls auf dieser Website
          einsehbar ist.
        </p>
      </section>
    </div>
  );
};

export default Impressum;
