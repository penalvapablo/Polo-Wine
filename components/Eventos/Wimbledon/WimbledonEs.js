import styles from '/components/Eventos/Events.module.scss'

const WimbledonEs = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>WIMBLEDON 2023</h2>
      <p className={styles.eventText}>Disfruta en vivo y en directo de Wimbledon, el certamen de tenis más antiguo del mundo y vive la mejor experiencia de Grand Slam.<br /><br />

        Cada año, la ciudad de Londres recibe a los mejores tenistas del mundo y cientos de aficionados se dan cita en el coqueto barrio de Wimbledon para ser testigos del torneo más prestigioso de tenis a nivel mundial.<br /><br />

        Ya sea que quieras asistir al legendario evento y disfrutar del ambiente festivo de la ciudad o aprovechar el viaje para recorrer Londres y sus alrededores,<span> tenemos el programa perfecto para ti.</span><br /><br />

        <span>Polo & Wine te invita a disfrutar de Wimbledon 2023 en Londres. Escoge las fechas de los partidos y deja que nosotros nos ocupemos del resto.</span><br /><br />

        Somos especialistas en Turismo Deportivo y de Eventos y nos encargamos de organizar tu viaje a Wimbledon completamente a medida para que disfrutes del único Grand Slam sobre hierba.<br /><br />

        Además, si quieres planificar días adicionales para recorrer otras ciudades del Reino Unido, te ofrecemos<span> alternativas para realizar turismo local y reservamos las mejores excursiones y paseos para que viajes tranquilo y de la mejor manera posible.</span><br /><br />

        Si eres fanático de este deporte, no te pierdas la oportunidad de conocer la “Catedral del Tenis” y saborear las tradicionales frutillas con crema de Wimbledon. ¡Sin dudas es una experiencia que no debes dejar pasar!<br /><br />

        <span>Empieza a planificar tu viaje a Wimbledon para el 2023 y reserva con Polo & Wine todos los servicios.</span><br /><br />

        Consúltanos por las fechas de salida y todos los paquetes disponibles para ver el torneo de Wimbledon en Londres.
      </p>

      <div className={styles.card}>
        <p className={styles.cardText}>Servicios Incluidos:<br />
          ● Selección de hoteles de 3, 4, o 5 estrellas<br />
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

export default WimbledonEs