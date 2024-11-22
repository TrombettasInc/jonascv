import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-contact'>
        <a href="/contact" className='footer-link'>
          Kontakt
        </a>
      </div>
      <div className='footer-link'>
        <a href="/agb" className='footer-link'>
          AGB
        </a>
        <a href="/daten-schutz" className='footer-link'>
          Daten Schutz
        </a>
        <a href="/impressum" className='footer-link'>
          Impressum
        </a>
        <a href="/cookie-einstellung" className='footer-link'>
          Cookie Einstellung
        </a>
      </div>
    </footer>
  )
}

export default Footer