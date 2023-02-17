import styles from './MobileNav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo-polo-and-wine.png';

const MobileNavEs = ({
  parent,
  mobileNavState,
  mobileNavFn,
}) => {
  return (
    <div
      className={`${styles.mobileNav} ${
        mobileNavState && styles.mobileNav__active
      }`}>
      <div
        className={
          parent === 'home'
            ? styles.off
            : styles.logoContainer
        }>
        <Image
          src={logo}
          alt="logo-polo-&-wine"
          fill
          sizes="300w"
        />
      </div>
      <nav
        className={`${
          parent === 'home' ? styles.navHome : styles.nav
        }`}>
        <ul>
          <li>
            <Link href="/es/">Inicio</Link>
          </li>
          <li>
            <Link href="/es/events">Eventos</Link>
          </li>
          <li>
            <Link href="/es/about">Quien soy</Link>
          </li>
          <li>
            <Link
              href={'#Contact'}
              onClick={mobileNavFn}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavEs;
