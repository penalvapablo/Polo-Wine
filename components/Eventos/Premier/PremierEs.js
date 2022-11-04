import styles from '/components/Eventos/Events.module.scss'

const Premier = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>PREMIER LEAGUE INGLATERRA</h2>
      <p className={styles.eventText}>Vive lo mejor de la Premier League y descubre el ambiente vibrante de ciudades como Liverpool, Manchester o Londres.<br /><br /><span>La Premier League de Inglaterra es la liga más emocionante del mundo</span> y para muchos fanáticos del fútbol, ver un partido en vivo y en directo es una oportunidad única en la vida.<br /><br />The Premiership, como le llaman en Inglaterra, se destaca no solo por su nivel competitivo en aumento, sino también por <span> el ambiente tan característico de sus estadios y por la mística de los aficionados que pueblan sus gradas en cada encuentro.</span><br /><br />Célebres equipos como el Chelsea, el Manchester United, el Liverpool o el Tottenham le dan vida a esta competencia británica que cuenta con millones de espectadores y fanáticos en todo el mundo.<br /><br />Polo & Wine te invita a <span>disfrutar de la máxima categoría del futbol inglés y a presenciar los mejores partidos en estadios legendarios como Anfield Road, Old Trafford o Stamford Bridge.</span><br /><br />Ya sea que quieras ser testigo del gran derby entre el Liverpool y el Manchester City o hacer coincidir tu escapada a Londres con una visita al Emirates Stadium, <span>tenemos el programa perfecto para ti.</span> <br /><br />Elige uno o varios partidos de tu equipo favorito y deja que nosotros nos ocupemos del resto. <span>Somos especialistas en Turismo Deportivo y de Eventos, diseñamos viajes a medida y nos adaptamos a tu presupuesto y necesidades.</span><br /><br />Si eres un verdadero amante del fútbol, no puedes perderte la oportunidad de vibrar con el ambiente único que se respira en un campo de fútbol inglés.<br /><br />Consúltanos por las fechas de salida y el calendario temporada 2022/2023 de la Premier League.</p>

      <div className={styles.card}>
        <p className={styles.cardText}>Servicios Incluidos:<br />
          ● Selección de hoteles de 3, 4, o 5 estrellas<br />
          ● Traslados in/out<br />
          ● Asesoramiento y asistencia bilingüe durante todo el viaje<br />
          ● Servicios sujetos a disponibilidad en el momento de realizar la reserva<br />
          ● Consultar por otros servicios de este paquete</p>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consultar</a>
      </div>
    </div>
  )
}

export default Premier