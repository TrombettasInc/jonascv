import React from 'react'
import { FaTrainSubway } from 'react-icons/fa6';
import { FaRegClock } from "react-icons/fa";
import { PiPhoneIncoming } from 'react-icons/pi';
import { MdOutlineEuroSymbol } from "react-icons/md";
import { FaPeopleGroup } from 'react-icons/fa6';
import { GoTrophy } from 'react-icons/go';
import './Banner.css'



const Banner = () => {
  return (
    <div className='container-fluid full-width-bg-image'>
      <section className='section section-benefits'>
        <div className='benefits-flex'>
          <h2 className='section-title benefits-title'>Ihre Vorteile des Service </h2>
          <div className='benefits-box'>
              <FaTrainSubway className="benefits-box__icon" />
              <span className='benefits-box__title'>Örtliche Nähe</span>
          </div>
          <div className='benefits-box'>
          <FaRegClock className="benefits-box__icon" />
              <span className='benefits-box__title'>Schnelle Reaktionszeit</span>
          </div>
          <div className='benefits-box'>
            <PiPhoneIncoming className="benefits-box__icon" />
              <span className='benefits-box__title'>Kostenloses Vorgespräch</span>
          </div>
          <div className='benefits-box'>
          <MdOutlineEuroSymbol className="benefits-box__icon" />
              <span className='benefits-box__title'>Transparente Preise</span>
          </div>
          <div className='benefits-box'>
            <FaPeopleGroup className="benefits-box__icon" />
              <span className='benefits-box__title'>Geballte Kompetenz</span>
          </div>
          <div className='benefits-box'>
            <GoTrophy className="benefits-box__icon"/>
              <span className='benefits-box__title'>Kundenzufriedenheit</span>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Banner