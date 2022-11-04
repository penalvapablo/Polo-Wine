import PoloExperience from './PoloExperience/PoloExperienceEn'
import Premier from './Premier/PremierEn'
import Wimbledon from './Wimbledon/WimbledonEn'
import Tomorrowland from './Tomorrowland/TomorrowlandEn'
import styles from '/components/Eventos/Events.module.scss'

const EventsEn = () => {
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

export default EventsEn
