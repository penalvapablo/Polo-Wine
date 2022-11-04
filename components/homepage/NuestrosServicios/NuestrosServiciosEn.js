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

const NuestrosServiciosEn = () => {
  return (
    <section className={styles.nuestrosServicios}>

      <h2 className={styles.title}>Our services</h2>
      <div className={styles.serviceContainer}>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faSoccerBall} className={styles.icon} />
          <p className={styles.text}>Attendance at matches and professional tournaments</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faHorse} className={styles.icon} />
          <p className={styles.text}>Polo vacations with the presence of professional players</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faWineGlass} className={styles.icon} />
          <p className={styles.text}>Organization of polo matches with wine tasting</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faHotel} className={styles.icon} />
          <p className={styles.text}>National and international hotel accommodation</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faVanShuttle} className={styles.icon} />
          <p className={styles.text}>Meet and Greet and transfers with bilingual staff</p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faComments} className={styles.icon} />
          <p className={styles.text}>Bilingual assistance throughout your trip</p>
        </div>
      </div>

      <Link href='/events' className={styles.link}>Book my next event</Link>

    </section>
  )
}

export default NuestrosServiciosEn