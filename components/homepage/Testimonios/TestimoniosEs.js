import styles from './Testimonios.module.scss'
import img1 from '/public/testimonios-1.png'
import img2 from '/public/testimonios-2.png'
import img3 from '/public/testimonios-3.png'
import Image from 'next/image'

const TestimoniosEs = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Testimonios de nuestros clientes</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.cardText}>Fuimos a ver la Finalissima en Londres y tanto la atención, como la organización fueron excelentes.
            Los traslados fueron muy puntuales y los hoteles acordes a lo que habíamos solicitado. Repetiríamos sin duda alguna.
          </p>
          <div className={styles.cardBottom}>
            <Image src={img1} alt='testimonios-1' className={styles.cardImg} />
            <p className={styles.cardName}>Richard Sun</p>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardText}>Viajamos a ver la Copa del Mundo y en todo momento nos sentimos seguros e informados en cuanto a sitios turísticos que visitar. La empresa está atenta a todos los detalles, son rápidos y dan soluciones a medida. Muy recomendable.</p>
          <div className={styles.cardBottom}>
            <Image src={img2} alt='testimonios-2' className={styles.cardImg} />
            <p className={styles.cardName}>Cesar Sosa</p>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardText}>Estuvimos en el Tomorrowland y la experiencia fue satisfactoria de principio a fin. Fuimos muy bien asesorados. El servicio es excelente, son puntuales y muy serios. Totalmente recomendables!!!</p>
          <div className={styles.cardBottom}>
            <Image src={img3} alt='testimonios-3' className={styles.cardImg} />
            <p className={styles.cardName}>Martin Mendez</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimoniosEs