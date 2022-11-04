import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightDots, faSoccerBall, faTruckPlane, faHandshake } from '@fortawesome/free-solid-svg-icons'

import styles from './Numeros.module.scss'

const NumerosEn = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.container}>
        <div className={styles.desktopContainer1}>
          <div className={`${styles.item} ${styles.item_1}`}>
            <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.itemIcon} />
            <p className={styles.itemNumber}>250</p>
            <p className={styles.itemText}>Happy passengers</p>
          </div>
          <div className={`${styles.item} ${styles.item_2}`}>
            <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.itemIcon} />
            <p className={styles.itemNumber}>15</p>
            <p className={styles.itemText}>Years of experience</p>
          </div>
        </div>
        <div className={styles.desktopContainer2}>
          <div className={`${styles.item} ${styles.item_3}`}>
            <FontAwesomeIcon icon={faSoccerBall} className={styles.itemIcon} />
            <p className={styles.itemNumber}>3</p>
            <p className={styles.itemText}>Trips to football<br /> world cups</p>
          </div>
          <div className={`${styles.item} ${styles.item_4}`}>
            <FontAwesomeIcon icon={faTruckPlane} className={styles.itemIcon} />
            <p className={styles.itemNumber}>38</p>
            <p className={styles.itemText}>Tours and activities<br />in a destination</p>
          </div>
          <div className={`${styles.item} ${styles.item_5}`}>
            <FontAwesomeIcon icon={faHandshake} className={styles.itemIcon} />
            <p className={styles.itemNumber}>7</p>
            <p className={styles.itemText}>Partners and associated tour operators</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default NumerosEn