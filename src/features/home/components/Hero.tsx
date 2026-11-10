import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <span className={styles.label}>SOFTWARE DEVELOPMENT · CURIOSITY · CREATION</span>

        <h1>
          Building things<br />
          and figuring out<br />
          how they work<span>.</span>
        </h1>

        <p className={styles.description}>
          I'm a software developer who enjoys turning curious ideas into real projects.
          I spend my time exploring systems, experimenting with code and learning how
          technology fits together — usually with a few projects in progress.
        </p>

        <div className={styles.actions}>
          <a href="/projects" className={styles.primaryButton}>
            Explore projects <span>↗</span>
          </a>

          <a href="/about" className={styles.secondaryButton}>
            A little about me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
