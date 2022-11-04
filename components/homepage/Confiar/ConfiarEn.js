import styles from './Confiar.module.scss'
import { faTruckPlane, faArrowUpRightDots, faAddressBook, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ConfiarEn = () => {
  return (
    <section className={styles.confiar}>
      <h2 className={styles.title}>Why trust in Polo & Wine?</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faTruckPlane} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Logistics</h3>
          <p className={styles.itemText}>We take care of the entire planning process, logistics and coordination of your trip regardless of the destination or size of the event.</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Trajectory</h3>
          <p className={styles.itemText}>We have more than 15 years of experience in organising sports, cultural, entertainment and music festival trips.</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faAddressBook} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Contacts</h3>
          <p className={styles.itemText}>We have contact with polo clubs, specialised sports agencies and suppliers specialised in customised trips.</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faPeopleGroup} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Team Work</h3>
          <p className={styles.itemText}>Our team designs memorable experiences that adapt to the needs, requirements and preferences of each passenger.</p>
        </div>
      </div>
    </section>
  )
}

export default ConfiarEn