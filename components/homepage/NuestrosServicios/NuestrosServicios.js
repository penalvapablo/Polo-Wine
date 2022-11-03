import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './NuestrosServicios.module.scss'
import { faSoccerBall } from '@fortawesome/free-solid-svg-icons'
import { faHorse } from '@fortawesome/free-solid-svg-icons'
import { faWineGlass } from '@fortawesome/free-solid-svg-icons'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faVanShuttle } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

const NuestrosServicios = () => {
  return (
    <section className={styles.nuestrosServicios}>

      <h2 className={styles.title}>Nuestros Servicios</h2>
      <div className={styles.serviceContainer}>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faSoccerBall} className={styles.icon} />
          <p className={styles.text}>Asistencia a partidos y torneos profesionales</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faHorse} className={styles.icon} />
          <p className={styles.text}>Vacaciones de polo con presencia de jugadores profesionales.</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faWineGlass} className={styles.icon} />
          <p className={styles.text}>Organización de partidos de polo con cata de vinos</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faHotel} className={styles.icon} />
          <p className={styles.text}>Reserva de hotelería nacional e internacional</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faVanShuttle} className={styles.icon} />
          <p className={styles.text}>Recepciones y traslados con personal bilingüe</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faComments} className={styles.icon} />
          <p className={styles.text}>Asistencia bilingue durante todo tu viaje</p>
        </div>
      </div>

      <Link href='/events' className={styles.link}>Reservar mi próximo evento</Link>

    </section>
  )
}

export default NuestrosServicios