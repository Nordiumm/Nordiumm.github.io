import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <span className={styles.label}>SOFTWARE DEVELOPMENT</span>

        <h1>
          Software developer
          <span>.</span>
        </h1>

        <p className={styles.description}>
          I enjoy programming, working on different projects
          and exploring everything that software development has to offer.
        </p>

        <div className={styles.actions}>
          <a href="/projects" className={styles.primaryButton}>
            Explore projects <span>↗</span>
          </a>

          <a href="/about" className={styles.secondaryButton}>
            About me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero