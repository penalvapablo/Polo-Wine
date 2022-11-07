import Image from "next/image"
import styles from './Contacto.module.scss'
import logo from '/public/logo-polo-and-wine.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'


const ContactoEs = () => {
  return (
    <section id="Contact" className={styles.contacto}>
      <div className={styles.desktopContainer}>
        <div className={styles.container1}>
          <Image src={logo} alt='logo-polo-&-wine' className={styles.img} />
          {/* <h2 className={styles.title}>Contacto</h2> */}
        </div>
        <div className={styles.container2}>
          <p className={styles.subTitle}>Teléfono</p>
          <a className={styles.text}>+447397793899</a>
          <p className={styles.subTitle}>Email</p>
          <p className={styles.text}>info@poloandwine.com</p>
          <p className={styles.subTitle}>Mis redes sociales</p>
          <div className={styles.SocialLinksBox}>
            <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank">  <FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href='https://instagram.com/poloandwine' rel='noreferrer' target={'_blank'}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://www.facebook.com/soledadsaltoconsulting' rel='noreferrer' target={'_blank'}><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
        </div>
      </div>
      <p className={styles.copyright}><span>Polo & Wine.</span> Todos los derechos reservados 2022</p>
    </section>
  )
}

export default ContactoEs