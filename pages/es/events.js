import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useState } from 'react';
import styles from '/components/Eventos/Events.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ContactoEs from '../../components/Contacto/ContactoEs';
import EventsEs from '../../components/Eventos/EventsEs';
import NavEs from '../../components/Nav/NavEs';
import MobileNavEs from '../../components/MobileNav/MobileNavEs';

const Events = () => {
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
    <div className={styles.container}>
      <Head>
        <title>
          Los mejores eventos en Argentina y el mundo | POLO
          & WINE
        </title>
        <meta
          name="description"
          content="Especialistas en Turismo Deportivo y de Eventos. Paquetes turísticos a conciertos, eventos deportivos, festivales, espectáculos teatrales y mucho más."
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

      <div className={`${styles.mobileNav__container}`}>
        {/* <MobileNav
          parent="events"
          mobileNavFn={mobileNavFn}
          mobileNavState={mobileNav}
        /> */}
        <MobileNavEs
          parent="events"
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

      <EventsEs />
      <ContactoEs />
    </div>
  );
};

export default Events;
