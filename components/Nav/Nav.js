import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '/public/logo-polo-and-wine.png'
import styles from './Nav.module.scss'
import { useRouter } from 'next/router'

const Nav = ({ language }) => {
  const { pathname } = useRouter()


  return (
    <div className={styles.nav}>
      <Image src={logo} alt='logo-polo-&-wine' className={styles.logo} />
      <nav className={styles.navLinks}>
        <ul>
          {language === 'es' && <>
            <li ><Link href='/' className={`${pathname === '/' && styles.active}`}>Home</Link></li>
            <li><Link href='/events' className={`${pathname === '/events' && styles.active}`}>Eventos</Link></li>
            <li><Link href='/about' className={`${pathname === '/about' && styles.active}`}>Quien soy</Link></li>
            <li><Link href={'#Contact'}>Contacto</Link></li>
          </>}
          {language === 'en' && <>
            <li><Link href='/' className={`${pathname === '/' && styles.active}`} >Home</Link></li>
            <li><Link href='/events' className={`${pathname === '/events' && styles.active}`}>Events</Link></li>
            <li><Link href='/about' className={`${pathname === '/about' && styles.active}`}>About</Link></li>
            <li><Link href={'#Contact'}>Contact</Link></li>
          </>}

        </ul>
      </nav>
    </div >
  )
}

export default Nav