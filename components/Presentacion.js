import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Presentacion.module.scss'

const Presentacion = () => {

  return (
    <section className={styles.presentacion}>

      <h1 className={styles.title}>Polo & Wine,<br /> una pasión y tradición que nos conecta</h1>
      <p className={styles.text}>Argentina es reconocida en todo el mundo por la calidad de sus vinos y por tener el mejor equipo de polo de la historia.</p>
      <p className={styles.text}>En Polo & Wines unimos ambas pasiones para ofrecerte una experiencia 100% nacional, diseñada por un <span>equipo de profesionales que conocen cada destino de primera mano y que te ayudarán a organizar tu viaje de manera inteligente.</span></p>
    </section>
  )
}

export default Presentacion