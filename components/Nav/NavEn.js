import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '/public/logo-polo-and-wine.png';
import styles from './Nav.module.scss';
import { useRouter } from 'next/router';

const NavEn = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.nav}>
      <Image
        src={logo}
        alt="logo-polo-&-wine"
        className={styles.logo}
      />
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link
              href="/"
              className={`${
                pathname === '/' && styles.active
              }`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className={`${
                pathname === '/events' && styles.active
              }`}>
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === '/about' && styles.active
              }`}>
              About
            </Link>
          </li>
          <li>
            <Link href={'#Contact'}>Contact</Link>
          </li>
          <div className={styles.languageBtns}>
            <Link
              className={styles.languageBtn}
              href="/es/">
              ES
            </Link>
            <p>/</p>
            <Link
              className={styles.languageBtn}
              href="/">
              EN
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavEn;
