import styles from '/components/Eventos/Events.module.scss'

const TomorrowlandEs = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>TOMORROWLAND 2023</h2>
      <p className={styles.eventText}>Disfruta de Tomorrowland, el festival de música electrónica más potente del mundo, y vive una experiencia que no olvidarás jamás.<br /><br />

        Cada año, miles de fanáticos viajan a Boom, una pequeña localidad belga entre Amberes y Bruselas, para presenciar este espectáculo musical que reúne lo mejor de la música dance y electrónica.<br /><br />

        Durante casi una semana, más de 50000 viajeros de todas partes del mundo se dan cita en este gran parque temático que cuenta con más de 15 escenarios diferentes y en el que cientos de artistas salen a escena durante cada jornada.<br /><br />

        Ya sea que quieras acampar en la Dreamville, el sector de campings dentro del predio de Tomorrowland, o prefieras la comodidad y tranquilidad de un hotel cercano al festival, <span>tenemos el programa perfecto para ti.</span> <br /><br />

        Somos especialistas en Turismo Deportivo y de Eventos y nos encargamos de organizar tu viaje a Tomorrowland completamente a medida para que disfrutes del festival y sus momentos más icónicos.<br /><br />

        Además, si quieres planificar días adicionales para recorrer otras ciudades de Bélgica, te ofrecemos <span>alternativas para realizar turismo local y reservamos las mejores excursiones y paseos para que viajes tranquilo y de la mejor manera posible.</span><br /><br />

        Empieza a planificar tu viaje a Tomorrowland 2023 y reserva con Polo & Wine todos los servicios. <br /><br />

        Consúltanos por todos los paquetes disponibles para asistir a Tomorrowland 2023 en Bélgica y sumérgete en la atmósfera única del festival de música dance más grande del mundo.</p>


      <div className={styles.card}>
        <p className={styles.cardText}>Servicios Incluidos:<br />
          ● Alojamiento en carpas en la Dreamville o en hoteles ubicados en zonas cercanas al predio<br />
          ● Traslados in/out<br />
          ● Asesoramiento y asistencia bilingüe durante todo el viaje<br />
          ● Servicios sujetos a disponibilidad en el momento de realizar la reserva<br />
          ● Consultar por otros servicios de este paquete
        </p>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consultar</a>
      </div>
    </div>
  )
}

export default TomorrowlandEs