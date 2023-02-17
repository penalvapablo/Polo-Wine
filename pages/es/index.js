import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import PresentacionEs from '/components/homepage/Presentacion/PresentacionEs';
import EventosHomeEs from '/components/homepage/EventosHome/EventosHomeEs';
import NuestrosServiciosEs from '/components/homepage/NuestrosServicios/NuestrosServiciosEs';
import ConfiarEs from '/components/homepage/Confiar/ConfiarEs';
import PilaresEs from '/components/homepage/Pilares/PilaresEs';
import TestimoniosEs from '/components/homepage/Testimonios/TestimoniosEs';
import NumerosEs from '/components/homepage/Numeros/NumerosEs';
import ComoTrabajamosEs from '/components/homepage/ComoTrabajamos/ComoTrabajamosEs';
import ContactoEs from '/components/Contacto/ContactoEs';
import NavEs from '../../components/Nav/NavEs';
import HeroEs from '../../components/homepage/Hero/HeroEs';

export default function Home() {
  return (
    <div className={styles.container1}>
      <Head>
        <title>
          {
            'Polo & Wine | Agencia de Turismo Deportivo y Eventos'
          }
        </title>
        <meta
          name="google-site-verification"
          content="UaSUKE7_aZwWN7sMTxwL1CWNkw4HIhiNrB6zHb07Mk4"
        />
        <meta
          name="description"
          content={
            'Agencia de viajes especializada en turismo deportivo y eventos. Eventos Deportivos y conciertos internacionales | Viajes individuales y grupales a medida.'
          }
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
      <NavEs />
      <HeroEs />
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
    </div>
  );
}
