import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useContext } from "react";
import AppContext from '../components/AppContext'

import Hero from '../components/homepage/Hero/Hero'
import PresentacionEs from '../components/homepage/Presentacion/PresentacionEs'
import PresentacionEn from '../components/homepage/Presentacion/PresentacionEn'
import EventosHomeEs from '../components/homepage/EventosHome/EventosHomeEs'
import EventosHomeEn from '../components/homepage/EventosHome/EventosHomeEn'
import NuestrosServiciosEs from '../components/homepage/NuestrosServicios/NuestrosServiciosEs'
import NuestrosServiciosEn from '../components/homepage/NuestrosServicios/NuestrosServiciosEn'
import ConfiarEs from '../components/homepage/Confiar/ConfiarEs'
import ConfiarEn from '../components/homepage/Confiar/ConfiarEn'
import PilaresEs from '../components/homepage/Pilares/PilaresEs'
import PilaresEn from '../components/homepage/Pilares/PilaresEn'
import TestimoniosEs from '../components/homepage/Testimonios/TestimoniosEs'
import TestimoniosEn from '../components/homepage/Testimonios/TestimoniosEn'
import NumerosEs from '../components/homepage/Numeros/NumerosEs'
import NumerosEn from '../components/homepage/Numeros/NumerosEn'
import ComoTrabajamosEs from '../components/homepage/ComoTrabajamos/ComoTrabajamosEs'
import ComoTrabajamosEn from '../components/homepage/ComoTrabajamos/ComoTrabajamosEn'

import Contacto from '../components/Contacto/ContactoEn'
import Nav from '../components/Nav/Nav'

export default function Home() {
  const value = useContext(AppContext);
  const { language } = value
  console.log(value)
  let title, metadescription
  if (language === 'es') {
    title = 'Polo & Wine | Agencia de Turismo Deportivo y Eventos'
    metadescription = 'Agencia de viajes especializada en turismo deportivo y eventos. Eventos Deportivos y conciertos internacionales | Viajes individuales y grupales a medida.'
  }

  if (language === 'en') {
    title = 'Polo & Wine | Sports Tourism and Events Agency'
    metadescription = ''
  }




  return (
    <div className={styles.container1}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metadescription} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav languageObj={value} />
      <Hero languageObj={value} />
      {language === 'es' && <>
        <PresentacionEs />
        <EventosHomeEs />
        <NuestrosServiciosEs />
        <div className={styles.container2}>
          <ConfiarEs />
          <PilaresEs />
        </div>
        <TestimoniosEs />
        <NumerosEs />
        <ComoTrabajamosEs />
        <Contacto />
      </>}
      {language === 'en' && <>
        <PresentacionEn />
        <EventosHomeEn />
        <NuestrosServiciosEn />
        <div className={styles.container2}>
          <ConfiarEn />
          <PilaresEn />
        </div>
        <TestimoniosEn />
        <NumerosEn />
        <ComoTrabajamosEn />
        <Contacto />
      </>}

    </div >
  )
}
