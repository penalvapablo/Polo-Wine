import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightDots, faSoccerBall, faTruckPlane, faHandshake } from '@fortawesome/free-solid-svg-icons'

import styles from './Numeros.module.scss'

const Numeros = ({ languages }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestros Números</h2>
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.item_1}`}>
          <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.itemIcon} />
          <p className={styles.itemNumber}>250</p>
          <p className={styles.itemText}>Pasajeros felices</p>
        </div>
        <div className={`${styles.item} ${styles.item_2}`}>
          <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.itemIcon} />
          <p className={styles.itemNumber}>15</p>
          <p className={styles.itemText}>Años de trayectoria</p>
        </div>
        <div className={`${styles.item} ${styles.item_3}`}>
          <FontAwesomeIcon icon={faSoccerBall} className={styles.itemIcon} />
          <p className={styles.itemNumber}>3</p>
          <p className={styles.itemText}>Viajes a mundiales <br /> de futbol</p>
        </div>
        <div className={`${styles.item} ${styles.item_4}`}>
          <FontAwesomeIcon icon={faTruckPlane} className={styles.itemIcon} />
          <p className={styles.itemNumber}>38</p>
          <p className={styles.itemText}>Tours y actividades<br /> en destino</p>
        </div>
        <div className={`${styles.item} ${styles.item_5}`}>
          <FontAwesomeIcon icon={faHandshake} className={styles.itemIcon} />
          <p className={styles.itemNumber}>7</p>
          <p className={styles.itemText}>Partners y operadores turísticos asociados</p>
        </div>
      </div>

    </section>
  )
}

export default Numeros