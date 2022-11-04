import styles from './Pilares.module.scss'

const PilaresEn = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Pillars</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Mission</h3>
          <p className={styles.itemText}>To help people to travel in a smart and safe way by offering quality services made to measure.</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Vision</h3>
          <p className={styles.itemText}>To be a leading brand in events, sports and polo tourism and to become a benchmark in Spanish-speaking countries.</p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>Values</h3>
          <p className={styles.itemText}>We promote responsible travel and participate in activities that respect local communities and biodiversity.</p>
        </div>
      </div>
    </section>
  )
}

export default PilaresEn