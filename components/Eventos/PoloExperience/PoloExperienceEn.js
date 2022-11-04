import styles from '/components/Eventos/Events.module.scss'

const PoloExperienceEn = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>POLO EXPERIENCE ARGENTINA</h2>
      <p className={styles.eventText}>Polo & Wine invites you to enjoy a 100% Argentine experience that combines nature,
        gastronomy and the best of polo. <br /><br />Just 50 minutes from Buenos Aires, an unforgettable adventure awaits you in which <span> you will learn about the history of polo, attend matches in real time and enjoy a day in
          the countryside surrounded by first-class horses and expert riders</span><br /><br />Whether you want to take polo lessons, become a player for a day or enjoy a game
        under the moonlight, we offer you a <span>selection of exclusive programs 365 days a year</span> <br /><br />We invite you to know our proposals.</p>

      <div className={styles.card}>
        <div className={styles.cardContainer1}>
          <h3 className={styles.cardTitle}>Polo Day</h3>
          <p className={styles.cardText}>Polo Day is a program designed for all those who <span>want to be polo players for a day and learn the secrets of the most exclusive sport in Argentina.
          </span>
            <br />
            Our proposal includes training, attendance at live polo matches, polo classes,
            horseback riding through Estancia La Carona and tasting the best of local cuisine.

            <br /><br />
            ● Hours: 9:00 a.m. to 5:00 p.m.
            <br />
            ● Includes: Reception, classes, mini game, lunch and coffee.</p>
        </div>

        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consult</a>

      </div>
      <div className={styles.card}>
        <div className={styles.cardContainer1}>
          <h3 className={styles.cardTitle}>Polo Holiday</h3>
          <p className={styles.cardText}>The Polo Holiday is the ideal event for enthusiasts or professional players who <span>want to combine their holidays with polo programs lasting more than 1 day.</span> <br /> The proposal includes private lessons, attendance at matches, accommodation and tasting of the best traditional Argentine dishes.
            <br />
            ● Hours: 9:00 a.m. to 5:00 p.m.<br />
            ● Includes: polo lessons, lodging, breakfast, lunch and dinner.
          </p>
        </div>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consult</a>
      </div>


      <div className={styles.card}>
        <div className={styles.cardContainer1}>
          <h3 className={styles.cardTitle}>Polo Night</h3>
          <p className={styles.cardText}>Polo Night is an event designed for those who <span>want to enjoy a memorable polo
            experience under the moonlight.</span> <br />
            The proposal consists of witnessing a match in the only professional floodlit field in
            the world, while tasting a typical Argentine &quot;picada&quot;,
            accompanied by empanadas, gourmet roast beef sandwiches and an exclusive
            national wine.<br /><br />
            ● Hours: 5:00 p.m. to 9:30 p.m.<br />
            ● Includes: Reception, classes, game and dinner.
          </p>
        </div>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consult</a>
      </div>

    </div>
  )
}

export default PoloExperienceEn