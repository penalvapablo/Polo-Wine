import React, { useState } from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import bg from '/public/polo-and-wine-bg-desktop.JPG';
import logo from '/public/logo-polo-and-wine.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MobileNavEn from '../../MobileNav/MobileNavEn';
import LanguageBtns from '../../LanguageBtns/LanguageBtns';

const HeroEn = () => {
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
        <MobileNavEn
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
        <h1 className={styles.title}>We are Polo & Wine</h1>
        <p className={styles.text}>
          We combine your passion for sports, music and
          entertainment with the best destinations.
        </p>
        <p className={styles.text}>
          Enjoy your favourite sport or artist{' '}
          <span>
            without missing out on the tourist details of
            each city.
          </span>
        </p>
        <Link
          href="/events"
          className={styles.btn}>
          Book my next event
        </Link>
      </div>
    </header>
  );
};

export default HeroEn;