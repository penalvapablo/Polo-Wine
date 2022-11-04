import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styles from '/components/About/About.module.scss'
import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import sole from '/public/Sole-polo-and-wine2.png'

const AboutEs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.desktopContainer1}>
        <h1 className={`${styles.title} ${styles.titleEn}`}>My name is Soledad and I am the creator of Polo & Wine</h1>
        <p className={styles.text}>I was born in Argentina, a country that is characterised by its great variety of landscapes, gastronomic richness and world-famous tourist destinations.<br /><br />My childhood was spent in the province of Santiago de Estero, in the middle of a landscape of hills, mountains and streams. Without knowing it, that first contact with nature and the heritage of my country defined my destiny forever.<br /><br /> Thus, from an early age, I knew that I wanted to study tourism to promote the wonders of Argentina worldwide.<br /><br /> In 2004 I fulfilled my dream of receiving a degree in Tourism and began working as a travel agent for various clients throughout my country. I also worked with foreign tour operators, which allowed me to weave a large network of contacts and build the supplier base with which I work today.<br /><br />After having travelled and lived in different cities around the world, I moved to London, the city where I currently reside. Inspired by two of my country&apos;s great passions, polo and wine, I began to design and create 100% Argentine tourist experiences in this country.<br /><br /> This is how Polo & Wine was born, an agency specialising in sports tourism programs and events, which connects passion with tradition and offers a memorable experience that transports each passenger to the south of South America.
        </p>
      </div>
      <div className={styles.desktopContainer2}>
        <div className={styles.sole}>
          <Image src={sole} alt='Music-Image' className={styles.soleImg} />
          <h2 className={styles.soleTitle}>Soledad Salto</h2>
          <p className={styles.soleText}>Specialist in Sports<br /> Tourism and Events</p>
        </div>
        <button className={styles.soleBtn}>
          <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank">Let&apos;s talk!</a>
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