import PoloExperience from './PoloExperience/PoloExperienceEs'
import Premier from './Premier/PremierEs'
import Wimbledon from './Wimbledon/WimbledonEs'
import Tomorrowland from './Tomorrowland/TomorrowlandEs'
import styles from '/components/Eventos/Events.module.scss'

const EventsEs = () => {
  return (
    <section>
      <div className={styles.separador}></div>

      <PoloExperience />

      <div className={styles.separador}></div>

      <Premier />

      <div className={styles.separador}></div>

      <Wimbledon />

      <div className={styles.separador}></div>

      <Tomorrowland />

    </section>
  )
}

export default EventsEs
