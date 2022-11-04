import Image from 'next/image'
import { useState } from 'react'
import img1 from '/public/music-polo-and-wine.png'
import img2 from '/public/football-polo-and-wine.png'
import img3 from '/public/travel-polo-and-wine.png'
import styles from './EventosHome.module.scss'
import Link from 'next/link'

const EventosHomeEn = ({ language }) => {
  return (
    <section className={styles.eventosHome}>
      <h2 className={styles.title}>
        Do not miss out on your favourite events
      </h2>
      <p className={styles.text}>Planning a trip to a concert abroad or attending an international football match is not an easy task.<br /><br /> At Polo and Wine, <span>we want sports and music fans to live a unique experience in their lives</span> and that is why we take care of all the details on each trip.</p>
      <div className={styles.events}>
        <div className={styles.eventsBox}>
          <Image src={img1} alt='Music-Image' className={styles.img} />
          <h3 className={styles.eventsTitle}>Concerts and Festivals</h3>
          <p className={styles.eventsDescription}>Attend the best cultural events and music festivals around the world and enjoy top-level international shows like Tomorrowland.</p>
        </div>
        <div className={styles.eventsBox}>
          <Image src={img2} alt='Music-Image' className={styles.img} />
          <h3 className={styles.eventsTitle}>Sports events</h3>
          <p className={styles.eventsDescription}>Live the excitement and adrenaline in exclusive sporting events and witness the best polo, tennis, football, rugby and Formula 1 race tournaments.</p>
        </div>
        <div className={styles.eventsBox}>
          <Image src={img3} alt='Music-Image' className={styles.img} />
          <h3 className={styles.eventsTitle}>Transfers </h3>
          <p className={styles.eventsDescription}>Do not miss out on your favourite events and book with us for the best individual and group transfer services for all your shows.</p>
        </div>
      </div>
      <Link href='#ComoTrabajamos' className={styles.link}>How to book</Link>
    </section>
  )
}

export default EventosHomeEn