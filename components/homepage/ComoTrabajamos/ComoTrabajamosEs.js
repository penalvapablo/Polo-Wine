import styles from './ComoTrabajamos.module.scss'

const ComoTrabajamosEs = () => {
  return (
    <section id='ComoTrabajamos' className={styles.section}>
      <h2 className={styles.title}>Cómo trabajamos</h2>
      <h3 className={styles.subTitle}>¿Cómo reservar en Polo & Wine?</h3>
      <p className={styles.text}>El primer paso es elegir tu paquete. Tenemos diferentes opciones disponibles según cada evento y los adaptamos a tus necesidades y requisitos. <br /><br />El segundo paso es elegir tu hotel. Contamos con una amplia gama de hoteles en
        todo el mundo y te asesoramos en cuánto a ubicación y tarifas.<br /><br />
        Durante todo el proceso de reserva, nuestro equipo especializado de eventos, se encarga de cada detalle de manera profesional.
      </p>
    </section>
  )
}

export default ComoTrabajamosEs