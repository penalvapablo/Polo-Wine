import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PresentacionEn from '../components/homepage/Presentacion/PresentacionEn';
import EventosHomeEn from '../components/homepage/EventosHome/EventosHomeEn';
import NuestrosServiciosEn from '../components/homepage/NuestrosServicios/NuestrosServiciosEn';
import ConfiarEn from '../components/homepage/Confiar/ConfiarEn';
import PilaresEn from '../components/homepage/Pilares/PilaresEn';
import TestimoniosEn from '../components/homepage/Testimonios/TestimoniosEn';
import NumerosEn from '../components/homepage/Numeros/NumerosEn';
import ComoTrabajamosEn from '../components/homepage/ComoTrabajamos/ComoTrabajamosEn';
import ContactoEn from '../components/Contacto/ContactoEn';
import NavEn from '../components/Nav/NavEn';
import HeroEn from '../components/homepage/Hero/HeroEn';

export default function Home() {
  return (
    <div className={styles.container1}>
      <Head>
        <title>
          Polo & Wine | Sports Tourism and Events
        </title>
        <meta
          name="google-site-verification"
          content="UaSUKE7_aZwWN7sMTxwL1CWNkw4HIhiNrB6zHb07Mk4"
        />
        <meta
          name="description"
          content="Travel agency specialised in sports tourism and events. Sporting events and international concerts | Individual and group tailor-made trips."
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
      <NavEn />
      <HeroEn />
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
    </div>
  );
}
