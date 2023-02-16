import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '/public/logo-polo-and-wine.png';
import styles from './Nav.module.scss';
import { useRouter } from 'next/router';

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
              href="/es/eventos"
              className={`${
                pathname === '/es/eventos' && styles.active
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

export default NavEs;
