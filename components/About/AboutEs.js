import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styles from '/components/About/About.module.scss'
import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import sole from '/public/Sole-polo-and-wine2.png'

const AboutEs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.desktopContainer1}>
        <h1 className={styles.title}>Hola, soy Soledad y soy la creadora de Polo & Wine.</h1>
        <p className={styles.text}>Nací en Argentina, un país que se caracteriza por su gran variedad de paisajes, su riqueza gastronómica y sus destinos turísticos célebres a nivel mundial.<br /><br /> Mi infancia transcurrió en la provincia de Santiago de Estero, en medio de un paisaje de lomadas, sierras y arroyos. Sin saberlo, ese primer contacto con la naturaleza y el patrimonio de mi país, definió mi destino para siempre.<br /><br /> Así, desde muy temprana edad, supe que quería estudiar turismo para promocionar las maravillas de Argentina a nivel mundial.<br /><br /> En 2004 cumplí mi sueño de recibirme de Licenciada en Turismo y empecé a trabajar como agente de viajes para diversos clientes a lo largo y ancho de mi país. También lo hice con operadores turísticos del extranjero, lo cual me permitió tejer una gran red de contactos y armar la base de proveedores con la que hoy trabajo.<br /><br /> Luego de haber viajado y vivido en diferentes ciudades alrededor del mundo, me mudé a Londres, ciudad en la que hoy resido. Inspirada por dos de nuestras grandes pasiones, el polo y el vino, comencé a diseñar y crear experiencias turísticas 100% argentinas en este país.<br /><br /> Así nace Polo & Wines, una agencia especializada en programas de turismo deportivo y de eventos, que conecta pasión con tradición y que ofrece una experiencia memorable que transporta a cada pasajero al sur de América del Sur.</p>
      </div>
      <div className={styles.desktopContainer2}>
        <div className={styles.sole}>
          <Image src={sole} alt='Music-Image' className={styles.soleImg} />
          <h2 className={styles.soleTitle}>Soledad Salto</h2>
          <p className={styles.soleText}>Especialista en Turismo<br /> Deportivo y de Eventos</p>
        </div>
        <button className={styles.soleBtn}>
          <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank">Hablemos!</a>
        </button>
        <div className={styles.soleLinks}>
          <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank">  <FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href='https://instagram.com/poloandwine' rel='noreferrer' target={'_blank'}><FontAwesomeIcon icon={faInstagram} /></a>
          <a href='https://www.facebook.com/soledadsaltoconsulting' rel='noreferrer' target={'_blank'}><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>
      </div>
    </section>
  )
}

export default AboutEs