import styles from '/components/Eventos/Events.module.scss'

const WimbledonEn = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>WIMBLEDON 2023</h2>
      <p className={styles.eventText}>Enjoy live Wimbledon, the oldest tennis event in the world and live the best
        Grand Slam experience.<br /><br />

        Every year, the city of London welcomes the best tennis players in the world and
        hundreds of fans gather in the charming neighborhood of Wimbledon to witness
        the most prestigious tennis tournament in the world.
        <br /><br />

        Whether you want to attend the legendary event and enjoy the festive
        atmosphere of the city or take advantage of the trip to explore London and its
        surroundings,<span> we have the perfect program for you.</span><br /><br />

        <span>Polo & Wine invites you to enjoy Wimbledon 2023 in London. Choose the
          dates of the matches and let us take care of the rest.</span><br /><br />

        We are specialists in Sports Tourism and Events and we take care of organizing
        your trip to Wimbledon completely tailored so that you can enjoy the only Grand
        Slam on grass.
        <br /><br />

        In addition, if you want to plan additional days to visit other cities in the United
        Kingdom, we offer you <span> alternatives for local tourism and we reserve the best
          excursions and walks so that you travel calmly and in the best possible
          way.</span><br /><br />

        If you are a fan of this sport, do not miss the opportunity to visit the &quot;Tennis
        Cathedral&quot; and savour the traditional Wimbledon strawberries with cream. Without a doubt, it is an experience that you should not miss!<br /><br />

        <span>Start planning your trip to Wimbledon for 2023 and book all services with
          Polo & Wine.</span><br /><br />

        Ask us about the departure dates and all the available packages to see the
        Wimbledon tournament in London.

      </p>

      <div className={styles.card}>
        <p className={styles.cardText}>Services included:<br />
          ● Selection of 3, 4, or 5 star hotels<br />
          ● Transfers in/out<br />
          ● Advice and bilingual assistance throughout the trip
          <br />
          ● Services subject to availability at the time of booking<br />
          ● Consult for other services of this package
        </p>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Get in Touch</a>
      </div>
    </div>
  )
}

export default WimbledonEn