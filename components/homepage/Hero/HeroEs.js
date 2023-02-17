import React, { useState } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import bg from '/public/polo-and-wine-bg-desktop.JPG';
import logo from '/public/logo-polo-and-wine.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MobileNavEs from '../../MobileNav/MobileNavEs';
import LanguageBtns from '../../LanguageBtns/LanguageBtns';

const HeroEs = () => {
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
    <header
      id="Home"
      className={styles.header}>
      <div className={`${styles.mobileNav__container}`}>
        <MobileNavEs
          mobileNavState={mobileNav}
          mobileNavFn={mobileNavFn}
          parent="home"
        />
      </div>
      <div className={styles.overlay}></div>

      {/* BACKGROUND IMAGES */}
      <div className={styles.bg_image_container}>
        <Image
          src={bg}
          alt="Image-Polo-&-Wine"
          layout="fill"
          priority
          quality={100}
          className={styles.bg_image}
        />
      </div>

      <LanguageBtns />

      <button
        className={styles.burgerBtn}
        onClick={mobileNavFn}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.burger}
        />
      </button>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt="logo-polo-&-wine"
          priority
          fill
          sizes="300w"
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Somos Polo & Wine</h1>
        <p className={styles.text}>
          Combinamos tu pasión por el deporte, la música y
          el entretenimiento con los mejores destinos.
        </p>
        <p className={styles.text}>
          Disfruta de tu deporte o artista favorito{' '}
          <span>
            sin perderte los detalles turísticos de cada
            ciudad.
          </span>
        </p>
        <Link
          href="/events"
          className={styles.btn}>
          Reservar mi próximo evento
        </Link>
      </div>
    </header>
  );
};

export default HeroEs;
