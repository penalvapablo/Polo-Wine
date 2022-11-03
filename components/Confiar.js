import styles from '../styles/Confiar.module.scss'
import { faTruckPlane, faArrowUpRightDots, faAddressBook, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Confiar = () => {
  return (
    <section className={styles.confiar}>
      <h2 className={styles.title}>¿Por qué confiar en Polo &Wine?</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faTruckPlane} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Logística</h3>
          <p className={styles.itemText}>Nos encargamos de todo el proceso de planificación, la logística y la coordinación de tu viaje sin importar el destino o tamaño del evento.</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Trayectoria</h3>
          <p className={styles.itemText}>Contamos con más de 15 años de experiencia en la organización de viajes deportivos, culturales, de espectáculos y festivales musicales.</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faAddressBook} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Contactos</h3>
          <p className={styles.itemText}>Tenemos contacto con clubes de polo, agencias especializadas en deportes y proveedores especializados en viajes a medida.</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faPeopleGroup} className={styles.itemIcon} />
          <h3 className={styles.itemTitle}>Equipo</h3>
          <p className={styles.itemText}>Nuestro equipo diseña experiencias memorables que se adaptan a las necesidades, requerimientos y preferencias de cada pasajero.</p>
        </div>
      </div>
    </section>
  )
}

export default Confiar