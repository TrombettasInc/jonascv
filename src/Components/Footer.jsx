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
        <a href="/datenschutz" className='footer-link'>
          Datenschutz
        </a>
        <a href="/impressum" className='footer-link' >
          Impressum
        </a>
       
      </div>
    </footer>
  )
}

export default Footer