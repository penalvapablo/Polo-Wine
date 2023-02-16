import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useContext } from 'react';
import AppContext from '../components/AppContext';

import Hero from '../components/homepage/Hero/Hero';
import PresentacionEs from '../components/homepage/Presentacion/PresentacionEs';
import PresentacionEn from '../components/homepage/Presentacion/PresentacionEn';
import EventosHomeEs from '../components/homepage/EventosHome/EventosHomeEs';
import EventosHomeEn from '../components/homepage/EventosHome/EventosHomeEn';
import NuestrosServiciosEs from '../components/homepage/NuestrosServicios/NuestrosServiciosEs';
import NuestrosServiciosEn from '../components/homepage/NuestrosServicios/NuestrosServiciosEn';
import ConfiarEs from '../components/homepage/Confiar/ConfiarEs';
import ConfiarEn from '../components/homepage/Confiar/ConfiarEn';
import PilaresEs from '../components/homepage/Pilares/PilaresEs';
import PilaresEn from '../components/homepage/Pilares/PilaresEn';
import TestimoniosEs from '../components/homepage/Testimonios/TestimoniosEs';
import TestimoniosEn from '../components/homepage/Testimonios/TestimoniosEn';
import NumerosEs from '../components/homepage/Numeros/NumerosEs';
import NumerosEn from '../components/homepage/Numeros/NumerosEn';
import ComoTrabajamosEs from '../components/homepage/ComoTrabajamos/ComoTrabajamosEs';
import ComoTrabajamosEn from '../components/homepage/ComoTrabajamos/ComoTrabajamosEn';

import ContactoEs from '../components/Contacto/ContactoEs';
import ContactoEn from '../components/Contacto/ContactoEn';
import Nav from '../components/Nav/Nav';
import NavEn from '../components/Nav/NavEn';

export default function Home() {
  const value = useContext(AppContext);
  const { language } = value;

  let title, metadescription;
  if (language === 'es') {
    title =
      'Polo & Wine | Agencia de Turismo Deportivo y Eventos';
    metadescription =
      'Agencia de viajes especializada en turismo deportivo y eventos. Eventos Deportivos y conciertos internacionales | Viajes individuales y grupales a medida.';
  }

  if (language === 'en') {
    title = 'Polo & Wine | Sports Tourism and Events';
    metadescription =
      'Travel agency specialised in sports tourism and events. Sporting events and international concerts | Individual and group tailor-made trips.';
  }
  return (
    <div className={styles.container1}>
      <Head>
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="UaSUKE7_aZwWN7sMTxwL1CWNkw4HIhiNrB6zHb07Mk4"
        />
        <meta
          name="description"
          content={metadescription}
        />
        <meta
          name="format-detection"
          content="telephone=no"
        />
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>
      {/* <Nav languageObj={value} /> */}
      <NavEn />
      <Hero languageObj={value} />
      {language === 'es' && (
        <>
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
          <ContactoEs />
        </>
      )}
      {language === 'en' && (
        <>
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
          <ContactoEn />
        </>
      )}
    </div>
  );
}
