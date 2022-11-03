import styles from '../styles/MobileNav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo-polo-and-wine.png'


const MobileNav = ({ parent, mobileNavState, mobileNavFn, language }) => {

  return (
    <div className={`${styles.mobileNav} ${mobileNavState && styles.mobileNav__active}`}>
      <div className={parent === 'home' ? styles.off : styles.logoContainer}>
        <Image src={logo} alt='logo-polo-&-wine' fill sizes="300w" />
      </div>
      <nav className={`${parent === 'home' ? styles.navHome : styles.nav}`}>
        <ul>
          {language === 'es' && <>
            <li><Link href='/' >Home</Link></li>
            <li><Link href='/events' >Eventos</Link></li>
            <li><Link href='/about' >Quien soy</Link></li>
            <li><Link href={'#Contact'} >Contacto</Link></li>
          </>}
          {language === 'en' && <>
            <li><Link href='/' >Home</Link></li>
            <li><Link href='/events' >Events</Link></li>
            <li><Link href='/about' >About</Link></li>
            <li><Link href={'/#Contact'} onClick={mobileNavFn}>Contact</Link></li>
          </>}

        </ul>
      </nav>
    </div>
  )
}


export default MobileNav
