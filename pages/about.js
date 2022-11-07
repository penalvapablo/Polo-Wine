import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../components/About/About.module.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from '/components/MobileNav/MobileNav'
import { useContext } from "react";
import AppContext from '../components/AppContext'

import ContactoEs from '../components/Contacto/ContactoEs'
import Nav from '../components/Nav/Nav'
import AboutEs from '../components/About/AboutEs'
import AboutEn from '../components/About/AboutEn'

import ContactoEn from '../components/Contacto/ContactoEn'


const About = () => {
  const value = useContext(AppContext)
  let { language, languageFnEs, languageFnEn } = value

  const [mobileNav, setMobileNav] = useState(false)
  const mobileNavFn = () => {
    setMobileNav(!mobileNav)
  }

  if (typeof window !== "undefined") {
    mobileNav ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'auto'
  }


  let title, metadescription
  if (language === 'es') {
    title = 'Soledad Salto | Especialista en Turismo Deportivo y Eventos'
    metadescription = 'Experta en torneos de polo. Te llevo a los mejores eventos deportivos y recitales del mundo y convierto tu viaje en una experiencia única e inolvidable.'
  }

  if (language === 'en') {
    title = 'Soledad Salto | Specialist in Sports Tourism and Events'
    metadescription = 'Expert in polo tournaments. I take you to the best sporting events and recitals in the world and turn your trip into a unique and unforgettable experience.'
  }


  return (
    <div className={styles.about}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metadescription} />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav languageObj={value} />
      <div className={styles.languageBtns}>
        <button className={styles.languageBtn} onClick={languageFnEs}>ES</button>
        <p>/</p>
        <button className={styles.languageBtn} onClick={languageFnEn}>EN</button>
      </div>

      <div className={`${styles.mobileNav__container}`}>
        <MobileNav parent='about' mobileNavFn={mobileNavFn} mobileNavState={mobileNav} language={language} />
      </div>

      <button className={styles.burgerBtn} onClick={mobileNavFn}>
        <FontAwesomeIcon icon={faBars} className={styles.burger} />
      </button>

      {language === 'es' && <>
        <AboutEs />
        <ContactoEs />
      </>}

      {language === 'en' && <>
        <AboutEn />
        <ContactoEn />
      </>}




    </div>
  )
}

export default About