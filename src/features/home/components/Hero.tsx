import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <span className={styles.eyebrow}>NORDIUMM · SOFTWARE DEVELOPER</span>

        <h1>
          I like understanding<br />
          how things work<span>.</span>
        </h1>

        <p className={styles.description}>
          I'm a developer who enjoys exploring technology and building things
          from the ground up. I work on software, systems and game-related
          projects, usually following an idea just to see how far I can take it.
        </p>

        <p className={styles.detail}>
          Most of my interests sit somewhere between programming, Linux,
          cybersecurity and games. I especially enjoy projects where I can
          learn something new and make the result my own.
        </p>

        <div className={styles.actions}>
          <a href="/projects" className={styles.primaryButton}>
            Browse projects <span aria-hidden="true">↗</span>
          </a>
          <a href="/about" className={styles.secondaryButton}>
            More about me
          </a>
        </div>

        <div className={styles.interests} aria-label="My interests">
          <span>Software</span>
          <span>Linux</span>
          <span>Cybersecurity</span>
          <span>Game development</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
