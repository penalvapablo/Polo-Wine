import styles from '/components/Eventos/Events.module.scss'

const PoloExperienceEs = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>POLO EXPERIENCE ARGENTINA</h2>
      <p className={styles.eventText}>Polo & Wine te invita a disfrutar de una experiencia 100% argentina que combina naturaleza, gastronomía y lo mejor del polo. <br /><br />A tan solo 50 minutos de Buenos Aires, te espera una aventura inolvidable en la que <span> conocerás la historia del polo, asistirás a partidos en tiempo real y disfrutarás de un día de campo rodeado de caballos de primera categoría y jinetes expertos.</span><br /><br />Ya sea que quieras tomar lecciones de polo, convertirte en jugador por un día o disfrutar de un partido bajo la luz de la luna, te ofrecemos una<span>selección de programas exclusivos durante los 365 días del año.</span> <br /><br />Te invitamos a conocer nuestras propuestas.</p>

      <div className={styles.card}>
        <div className={styles.cardContainer1}>
          <h3 className={styles.cardTitle}>Polo Day</h3>
          <p className={styles.cardText}>El Polo Day es un programa pensado para todos aquellos que <span>quieren ser polistas por un día y aprender los secretos del deporte más exclusivo de Argentina.</span> <br />
            Nuestra propuesta incluye capacitaciones, asistencia a partidos de polo en vivo, clases de polo, cabalgatas por la Estancia La Carona y degustación de lo mejor de la gastronomía local.<br /><br />
            ● Horario: 9:00 a.m. a 5:00 p.m.<br />
            ● Incluye: Recepción, clases, mini partido, almuerzo y café.</p>
        </div>

        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consultar</a>

      </div>
      <div className={styles.card}>
        <div className={styles.cardContainer1}>
          <h3 className={styles.cardTitle}>Polo Holiday</h3>
          <p className={styles.cardText}>El Polo Holiday es el evento ideal para <span>aficionados o jugadores profesionales que quieren combinar sus vacaciones con programas de polo de más de 1 día de duración.</span> <br /> <br />
            ● Horario: 9:00 a.m. a 5:00 p.m. <br />
            ● Incluye: lecciones de polo, alojamiento, desayuno, almuerzo y cena.</p>
        </div>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consultar</a>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContainer1}>
          <h3 className={styles.cardTitle}>Polo Night</h3>
          <p className={styles.cardText}>El Polo Night es un evento pensado para quienes quieren <span>disfrutar de una experiencia de polo memorable bajo la luz de la luna.</span> <br />
            La propuesta consiste en presenciar un partido en la única cancha profesional iluminada del mundo, mientras se degusta una típica “picada” argentina, acompañada por empanadas, sandwiches gourmet de carne asada y un exclusivo vino nacional.<br /><br />
            ● Horario: 5:00 p.m. a 9:30 p.m.<br />
            ● Incluye: Recepción, clases, partido y cena.</p>
        </div>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consultar</a>
      </div>

    </div>
  )
}

export default PoloExperienceEs