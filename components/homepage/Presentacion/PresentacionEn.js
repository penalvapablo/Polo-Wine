import Image from 'next/image'
import img from '/public/polo-and-wine.jpg'
import styles from './Presentacion.module.scss'

const PresentacionEn = () => {

  return (
    <section className={styles.presentacion}>
      <div className={styles.mobileDiv1}>
        <div className={styles.desktopDiv}>
          <h2 className={styles.title1}>Polo & Wine<br /> is a passion and tradition that connects us</h2>
          <p className={styles.text}>Argentina is recognised throughout the world for the quality of its wines and for having the best polo team in history.<br /><br />At Polo & Wine, we unite both passions to offer you a 100% national experience, designed by a <span>team of professionals who know each destination first-hand and who will help you organise your trip meticulously.</span></p>
        </div>

        <Image src={img} alt='Image-Polo-&-Wine' className={styles.img} />
      </div>
      <div className={styles.separador}></div>
      <div className={styles.mobileDiv2}>
        <h1 className={styles.title2}>We speak the same language</h1>
        <p className={`${styles.text} ${styles.text2}`}>We take care of the design and logistics of your trip and for this, we have an extensive network of contacts that includes polo clubs, tour operators, embassies and travel agencies around the world.<br /><br /> Our bilingual team takes care of every detail so that when you arrive at your destination, you already have all the services and can enjoy your events without complications.</p>

      </div>
    </section>
  )
}

export default PresentacionEn