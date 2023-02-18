import Link from 'next/link';
import React, { useState } from 'react';
import styles from './LanguageBtns.module.scss';
import { useRouter } from 'next/router';

const LanguageBtns = () => {
  const { pathname } = useRouter();

  return (
    <>
      {(pathname === '/es' || pathname === '/') && (
        <div className={styles.languageBtns}>
          <Link
            className={styles.languageBtn}
            href="/es">
            ES
          </Link>
          <p>/</p>
          <Link
            className={styles.languageBtn}
            href="/">
            EN
          </Link>
        </div>
      )}
      {(pathname === '/es/events' ||
        pathname === '/events') && (
        <div className={styles.languageBtns}>
          <Link
            className={styles.languageBtn}
            href="/es/events">
            ES
          </Link>
          <p>/</p>
          <Link
            className={styles.languageBtn}
            href="/events">
            EN
          </Link>
        </div>
      )}
      {(pathname === '/es/about' ||
        pathname === '/about') && (
        <div className={styles.languageBtns}>
          <Link
            className={styles.languageBtn}
            href="/es/about">
            ES
          </Link>
          <p>/</p>
          <Link
            className={styles.languageBtn}
            href="/about">
            EN
          </Link>
        </div>
      )}
    </>
  );
};

export default LanguageBtns;
