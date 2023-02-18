import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../components/About/About.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import AboutEn from '../components/About/AboutEn';

import ContactoEn from '../components/Contacto/ContactoEn';
import NavEn from '../components/Nav/NavEn';
import LanguageBtns from '../components/LanguageBtns/LanguageBtns';
import MobileNavEn from '../components/MobileNav/MobileNavEn';

const About = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavFn = () => {
    setMobileNav(!mobileNav);
  };

  if (typeof window !== 'undefined') {
    mobileNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }

  return (
    <div className={styles.about}>
      <Head>
        <title>
          Soledad Salto | Specialist in Sports Tourism and
          Events
        </title>
        <meta
          name="description"
          content="Expert in polo tournaments. I take you to the best sporting events and recitals in the world and turn your trip into a unique and unforgettable experience."
        />
        <meta
          name="format-detection"
          content="telephone=no"
        />
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>
      <NavEn />
      <LanguageBtns />

      <div className={`${styles.mobileNav__container}`}>
        <MobileNavEn
          parent="about"
          mobileNavFn={mobileNavFn}
          mobileNavState={mobileNav}
        />
      </div>

      <button
        className={styles.burgerBtn}
        onClick={mobileNavFn}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.burger}
        />
      </button>

      <AboutEn />
      <ContactoEn />
    </div>
  );
};

export default About;
