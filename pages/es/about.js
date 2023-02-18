import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../../components/About/About.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ContactoEs from '../../components/Contacto/ContactoEs';
import AboutEs from '../../components/About/AboutEs';
import LanguageBtns from '../../components/LanguageBtns/LanguageBtns';
import MobileNavEs from '../../components/MobileNav/MobileNavEs';
import NavEs from '../../components/Nav/NavEs';

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
          Soledad Salto | Especialista en Turismo Deportivo
          y Eventos
        </title>
        <meta
          name="description"
          content="Experta en torneos de polo. Te llevo a los mejores eventos deportivos y recitales del mundo y convierto tu viaje en una experiencia única e inolvidable."
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
      <NavEs />
      <LanguageBtns />

      <div className={`${styles.mobileNav__container}`}>
        <MobileNavEs
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

      <AboutEs />
      <ContactoEs />
    </div>
  );
};

export default About;
