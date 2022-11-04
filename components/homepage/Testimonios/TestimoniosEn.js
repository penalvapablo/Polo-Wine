import styles from './Testimonios.module.scss'
import img1 from '/public/testimonios-1.png'
import img2 from '/public/testimonios-2.png'
import img3 from '/public/testimonios-3.png'
import Image from 'next/image'

const TestimoniosEn = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Testimonials from our clients</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.cardText}>We went to see La Finalissima in London and both the attention and the organisation were excellent. The transfers were very punctual and the hotels were as we requested. We would repeat without a doubt.</p>
          <div className={styles.cardBottom}>
            <Image src={img1} alt='testimonios-1' className={styles.cardImg} />
            <p className={styles.cardName}>Richard Sun</p>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardText}>We travelled to see the World Cup and at all times we felt safe and informed about tourist sites to visit. The company was attentive to all the details, they were fast and provided customised solutions. Highly recommended.</p>
          <div className={styles.cardBottom}>
            <Image src={img2} alt='testimonios-2' className={styles.cardImg} />
            <p className={styles.cardName}>Cesar Sosa</p>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardText}>We were at Tomorrowland and the experience was satisfying from start to finish. We were very well advised. The service is excellent, they are punctual and very serious. Totally recommended!!!
          </p>
          <div className={styles.cardBottom}>
            <Image src={img3} alt='testimonios-3' className={styles.cardImg} />
            <p className={styles.cardName}>Martin Mendez</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimoniosEn