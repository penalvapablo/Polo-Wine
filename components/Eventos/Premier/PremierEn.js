import styles from '/components/Eventos/Events.module.scss'

const Premier = () => {
  return (
    <div className={styles.event}>
      <h2 className={styles.eventTitle}>PREMIER LEAGUE ENGLAND</h2>
      <p className={styles.eventText}>Experience the best of the Premier League and discover the vibrant atmosphere
        of cities like Liverpool, Manchester or London.
        <br /><br />
        <span>The English Premier League is the most exciting league in the world </span>and
        for many football fans, watching a match live and direct is a once in a lifetime
        opportunity.<br /><br />
        The Premiership, as it is called in England, stands out not only for its increasing
        competitive level, but also for<span>  the characteristic atmosphere of its stadiums and for the fascination of the fans that populate its stands at each match.</span><br /><br />
        Famous teams like Chelsea, Manchester United, Liverpool or Tottenham bring
        to life this British competition that has millions of spectators and fans around the
        world.<br /><br />
        Polo & Wine invites you to
        <span> enjoy the highest category of English football and
          to witness the best matches in legendary stadiums such as Anfield Road,
          Old Trafford or Stamford Bridge.</span><br /><br />
        Whether you want to witness the great derby between Liverpool and Manchester
        City or combine your London getaway with a visit to the Emirates Stadium,
        <span> we have the perfect program for you.
        </span> <br /><br />
        Choose one or several games of your favorite team and let us take care of the
        rest.
        <span> We are specialists in Sports Tourism and Events, we design tailor&ndash;made trips and adapt to your budget and needs.</span><br /><br />
        If you are a true football lover, you cannot miss the opportunity to tremble with
        the unique atmosphere that is breathed in an English football field.
        <br /><br />
        Ask us for the departure dates and the schedule for the 2022/2023 season of the
        Premier League.
      </p>

      <div className={styles.card}>
        <p className={styles.cardText}>Services included:<br />
          ● Selection of 3, 4, or 5 star hotels<br />
          ● Transfers in/out<br />
          ● Bilingual assistance throughout the trip<br />
          ● Services subject to availability at the time of booking<br />
          ● Consult for other services of this package
        </p>
        <a href='https://wa.link/jdmx80' rel='noreferrer' target="_blank" className={styles.cardBtn}>Get in Touch</a>
      </div>
    </div>
  )
}

export default Premier