import styles from './ComoTrabajamos.module.scss'

const ComoTrabajamosEn = () => {
  return (
    <section id='ComoTrabajamos' className={styles.section}>
      <h2 className={styles.title}>How do we work?</h2>
      <h3 className={styles.subTitle}>How to book with us?</h3>
      <p className={styles.text}>The first step is to choose your package. We have different options available for each event and we adapt them to your needs and requirements.
        <br /><br />The second step is to choose your hotel. We have a wide range of hotels around the world and can advise you on location and rates.
        <br /><br />
        During the entire booking process, our specialised event team takes care of every detail in a professional manner.
      </p>
    </section>
  )
}

export default ComoTrabajamosEn