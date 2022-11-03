import Image from 'next/image'
import { useState } from 'react'
import img from '../public/polo-and-wine.jpg'
import styles from '../styles/Presentacion.module.scss'

const Presentacion = ({ language }) => {

  return (
    <section className={styles.presentacion}>
      <div className={styles.mobileDiv1}>
        {language === 'es' && <>
          <h2 className={styles.title1}>Polo & Wine,<br /> una pasión y tradición que nos conecta</h2>
          <p className={styles.text}>Argentina es reconocida en todo el mundo por la calidad de sus vinos y por tener el mejor equipo de polo de la historia.</p>
          <p className={styles.text}>En Polo & Wines unimos ambas pasiones para ofrecerte una experiencia 100% nacional, diseñada por un <span>equipo de profesionales que conocen cada destino de primera mano y que te ayudarán a organizar tu viaje de manera inteligente.</span></p></>
        }
        {
          language === 'en' &&
          <>
            <h2 className={styles.title1}>Polo & Wine<br />is a passion and tradition that connects us</h2>
            <p className={styles.text}>Argentina is recognised throughout the world for the quality of its wines and for having the best polo team in history.</p>
            <p className={styles.text}>At Polo & Wine, we unite both passions to offer you a 100% national experience, designed by a <span>team of professionals who know each destination first-hand and who will help you organise your trip meticulously.</span></p>
          </>
        }

        <Image src={img} alt='Image-Polo-&-Wine' className={styles.img} />
      </div>
      <div className={styles.mobileDiv2}>
        <h1 className={`${styles.title1} ${styles.title2}`}>Hablamos tu mismo idioma</h1>
        <p className={`${styles.text} ${styles.text2}`}>Nos encargamos del diseño y logística de tu viaje y para ello contamos con una gran red de contactos que incluye a clubes de polo, tour operadores, embajadas y agencias de viajes alrededor del mundo.<br /><br /> Nuestro equipo bilingüe se ocupa de cada detalle, para que al llegar a destino, ya tengas todos los servicios y puedas disfrutar de tus eventos sin complicaciones.</p>

      </div>
    </section>
  )
}

export default Presentacion