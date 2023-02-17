import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useState } from 'react';
import styles from '/components/Eventos/Events.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ContactoEn from '../components/Contacto/ContactoEn';
import EventsEn from '../components/Eventos/EventsEn';
import MobileNavEn from '../components/MobileNav/MobileNavEn';
import NavEn from '../components/Nav/NavEn';

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
          The best events in Argentina and the world | POLO
          & WINE
        </title>
        <meta
          name="description"
          content="Specialists in Sports Tourism and Events. Tour packages to concerts, sporting events, festivals, theater shows and much more."
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

      <div className={`${styles.mobileNav__container}`}>
        {/* <MobileNav parent='events' mobileNavFn={mobileNavFn} mobileNavState={mobileNav} language={language} /> */}
        <MobileNavEn
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

      <EventsEn />
      <ContactoEn />
    </div>
  );
};

export default Events;
