import Image from 'next/image'
import { useState } from 'react'
import img1 from '/public/music-polo-and-wine.png'
import img2 from '/public/football-polo-and-wine.png'
import img3 from '/public/travel-polo-and-wine.png'
import styles from './EventosHome.module.scss'
import Link from 'next/link'

const EventosHome = ({ language }) => {
  return (
    <section className={styles.eventosHome}>
      <h2 className={styles.title}>
        No te quedes afuera de tus eventos favoritos
      </h2>
      <p className={styles.text}>Planificar un viaje a un concierto en el extranjero o asistir a un partido de fútbol internacional no es una tarea sencilla.<br /><br /> En Polo & Wine <span>queremos que los fanáticos del deporte y la música vivan una experiencia única en su vida</span> y por eso nos encargamos de todos los detalles en cada viaje.</p>
      <div className={styles.events}>
        <div className={styles.eventsBox}>
          <Image src={img1} alt='Music-Image' className={styles.img} />
          <h3 className={styles.eventsTitle}>CONCIERTOS Y FESTIVALES</h3>
          <p className={styles.eventsDescription}>Asiste a los mejores eventos culturales y festivales de música de todo el mundo y disfruta de shows internacionales de primer nivel como el Tomorrowland.</p>
        </div>
        <div className={styles.eventsBox}>
          <Image src={img2} alt='Music-Image' className={styles.img} />
          <h3 className={styles.eventsTitle}>EVENTOS DEPORTIVOS</h3>
          <p className={styles.eventsDescription}>Vive la emoción y la adrenalina en eventos deportivos exclusivos y sé testigo de los mejores torneos de polo, tenis, fútbol, rugby y carreras de Fórmula 1.</p>
        </div>
        <div className={styles.eventsBox}>
          <Image src={img3} alt='Music-Image' className={styles.img} />
          <h3 className={styles.eventsTitle}>TRASLADOS</h3>
          <p className={styles.eventsDescription}>No te quedes afuera de tus eventos favoritos y reserva con nosotros los mejores servicios de traslado individuales o grupales para todos tus shows.</p>
        </div>
      </div>
      <Link href='#ComoTrabajamos' className={styles.link}>Cómo Reservar</Link>
    </section>
  )
}

export default EventosHome