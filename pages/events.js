import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { useState } from 'react'
import styles from '/components/Eventos/Events.module.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from '/components/MobileNav/MobileNav'
import { useContext } from "react";
import AppContext from '../components/AppContext'
import ContactoEn from '../components/Contacto/ContactoEn'
import ContactoEs from '../components/Contacto/ContactoEs'
import Nav from '../components/Nav/Nav'
import EventsEn from '../components/Eventos/EventsEn'
import EventsEs from '../components/Eventos/EventsEs'


const Events = () => {
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
    title = 'Los mejores eventos en Argentina y el mundo | POLO & WINE'
    metadescription = 'Especialistas en Turismo Deportivo y de Eventos. Paquetes turísticos a conciertos, eventos deportivos, festivales, espectáculos teatrales y mucho más.'
  }

  if (language === 'en') {
    title = 'The best events in Argentina and the world | POLO & WINE'
    metadescription = 'Specialists in Sports Tourism and Events. Tour packages to concerts, sporting events, festivals, theater shows and much more.'
  }
  return (
    <div className={styles.container}>
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
        <MobileNav parent='events' mobileNavFn={mobileNavFn} mobileNavState={mobileNav} language={language} />
      </div>

      <button className={styles.burgerBtn} onClick={mobileNavFn}>
        <FontAwesomeIcon icon={faBars} className={styles.burger} />
      </button>

      {language === 'es' && <>
        <EventsEs />
        <ContactoEs />
      </>}
      {language === 'en' && <>
        <EventsEn />
        <ContactoEn />
      </>}


    </div>
  )
}

export default Events