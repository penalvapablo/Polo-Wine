import React, { useState } from 'react'
import styles from '../styles/Hero.module.scss'
import Image from 'next/image'
import bg from '../public/polo-and-wine-bg-desktop.JPG'
import logo from '../public/logo-polo-and-wine.png'
import MobileNav from './MobileNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Hero = ({ languageObj }) => {
  const [mobileNav, setMobileNav] = useState(false)
  let { language, languageFnEs, languageFnEn } = languageObj;
  const mobileNavFn = () => {
    setMobileNav(!mobileNav)
  }
  if (typeof window !== "undefined") {
    mobileNav ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'auto'
  }

  return (
    <header id='Home' className={styles.header} >

      <div className={`${styles.mobileNav__container}`}>
        <MobileNav mobileNavState={mobileNav} mobileNavFn={mobileNavFn} parent='home' language={language} />
      </div>
      <div className={styles.overlay}></div>
      {/* BACKGROUND IMAGES */}
      <div className={styles.bg_image_container}>
        <Image src={bg} alt='Image-Polo-&-Wine' layout='fill' priority quality={100} className={styles.bg_image} />
      </div>
      {/* <Image src={bgMobile} alt='Logo Polo & Wine' layout='fill' objectFit='cover' quality={100} className={styles.bg_image_desktop_container} /> */}
      {/* BACKGROUND IMAGES */}

      <div className={styles.languageBtns}>
        <button className={styles.languageBtn} onClick={languageFnEs}>ES</button>
        <p>/</p>
        <button className={styles.languageBtn} onClick={languageFnEn}>EN</button>
      </div>

      <button className={styles.burgerBtn} onClick={mobileNavFn}>
        <FontAwesomeIcon icon={faBars} className={styles.burger} />
      </button>
      <div className={styles.logoContainer}>
        <Image src={logo} alt='logo-polo-&-wine' priority fill sizes="300w" />
      </div>
      {language === 'es' && <>
        <div className={styles.textContainer}>
          <p className={styles.text}>Combinamos tu pasión por el deporte, la música y el entretenimiento con los mejores destinos.</p>
          <p className={styles.text}>Disfruta de tu deporte o artista favorito <span>sin perderte los detalles turísticos de cada ciudad.</span></p>
        </div>
        <button className={styles.btn}>
          <a>Reservar mi próximo evento</a>
        </button>
      </>
      }
      {language === 'en' && <>
        <div className={styles.textContainer}>
          <p className={styles.text}>We combine your passion for sports, music and entertainment with the best destinations.</p>
          <p className={styles.text}>Enjoy your favourite sport or artist  <span>without missing out on the tourist details of each city.</span></p>
        </div>
        <button className={styles.btnEn}>
          <a>Book my next event</a>
        </button>
      </>
      }

    </header>
  )
}

export default Hero