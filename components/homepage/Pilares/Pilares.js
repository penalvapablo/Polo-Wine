import styles from './Pilares.module.scss'

const Pilares = ({ languages }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestros Pilares</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Misión</h3>
          <p className={styles.itemText}>Ayudar a las personas a viajar de manera inteligente y segura ofreciendo servicios de calidad diseñados a medida.</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Visión</h3>
          <p className={styles.itemText}>Ser una marca líder en turismo de eventos, deportes y polo y convertirnos en un referente en los países de habla hispana.</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Valores</h3>
          <p className={styles.itemText}>Promovemos los viajes responsables y participamos de actividades que respetan a las comunidades locales y la biodiversidad.</p>
        </div>
      </div>
    </section>
  )
}

export default Pilares