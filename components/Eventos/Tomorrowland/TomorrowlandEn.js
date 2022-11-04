import styles from '/components/Eventos/Events.module.scss'

const TomorrowlandEn = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>TOMORROWLAND 2023</h2>
      <p className={styles.eventText}>Enjoy Tomorrowland, the most powerful electronic music festival in the world, and
        live an experience that you will never forget.
        <br /><br />

        Every year, thousands of fans travel to Boom, a small Belgian town between
        Antwerp and Brussels, to witness this musical show that brings together the best of
        dance and electronic music.<br /><br />

        For almost a week, more than 50,000 travelers from all over the world gather in this
        great theme park that has more than 15 different stages and in which hundreds of
        artists come on stage every day.
        <br /><br />

        Whether you want to camp in Dreamville, the campsite sector within the
        Tomorrowland grounds, or prefer the comfort and tranquility of a hotel near the
        festival,<span> we have the perfect program for you.</span> <br /><br />

        We are specialists in Sports and Events Tourism and we take care of organizing
        your trip to Tomorrowland completely tailored so that you can enjoy the festival and
        its most iconic moments.<br /><br />

        Also, if you want to plan additional days to visit other cities of
        Belgium, we offer you<span> alternatives for local tourism and we reserve the best
          excursions and tours so that you can travel calmly and in the best possible
          way.</span><br /><br />

        Start planning your trip to Tomorrowland 2023 and book all the services with Polo &
        Wine. <br /><br />

        Ask us about all the packages available to attend Tomorrowland 2023 in Belgium
        and immerse yourself in the unique atmosphere of the largest dance music festival
        in the world.</p>


      <div className={styles.card}>
        <p className={styles.cardText}>Services included:<br />
          ● Accommodation in tents in the Dreamville or in hotels located in areas near
          the venue
          <br />
          ● Transfers in/out to the festival
          <br />
          ● Advice and bilingual assistance throughout the trip<br />
          ● Services subject to availability at the time of booking
          <br />
          ● Consult for other services of this package

        </p>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Consultar</a>
      </div>
    </div>
  )
}

export default TomorrowlandEn