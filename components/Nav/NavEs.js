import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '/public/logo-polo-and-wine.png';
import styles from './Nav.module.scss';
import { useRouter } from 'next/router';
import LanguageBtns from '../LanguageBtns/LanguageBtns';

const NavEs = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.nav}>
      <Image
        src={logo}
        alt="logo-polo-&-wine"
        className={styles.logo}
      />
      <nav className={styles.navLinks}>
        <div className={styles.NavAndLanguageBtnsContainer}>
          <ul>
            <li>
              <Link
                href="/es/"
                className={`${
                  pathname === '/es' && styles.active
                }`}>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/es/events"
                className={`${
                  pathname === '/es/events' && styles.active
                }`}>
                Eventos
              </Link>
            </li>
            <li>
              <Link
                href="/es/about"
                className={`${
                  pathname === '/es/about' && styles.active
                }`}>
                Quien soy
              </Link>
            </li>
            <li>
              <Link href={'#Contact'}>Contacto</Link>
            </li>
          </ul>
          <LanguageBtns />
        </div>
      </nav>
    </div>
  );
};

export default NavEs;
