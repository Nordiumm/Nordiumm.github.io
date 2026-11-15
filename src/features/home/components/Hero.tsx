import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <span className={styles.eyebrow}>Software development · curiosity · creation</span>

        <h1>
          Curious ideas.<br />
          <span>Real things.</span><br />
          Built with code.
        </h1>

        <p className={styles.description}>
          I'm a software developer who loves exploring how technology works
          and turning interesting ideas into things people can actually use.
          Usually experimenting with systems, tools and the occasional game idea.
        </p>

        <div className={styles.actions}>
          <a href="/projects" className={styles.primaryButton}>
            Explore my projects <span aria-hidden="true">↗</span>
          </a>
          <a href="/about" className={styles.secondaryButton}>
            Get to know me
          </a>
        </div>

        <div className={styles.signature}>
          <span />
          Independent developer, learning by building
        </div>
      </div>

      <div className={styles.visual} aria-label="A decorative developer-themed card">
        <div className={styles.orb} />
        <div className={styles.showcase}>
          <div className={styles.cardTop}>
            <span className={styles.cardLabel}>A little about my world</span>
            <span className={styles.sparkle} aria-hidden="true">✧</span>
          </div>

          <div className={styles.codeWindow}>
            <div className={styles.codeMuted}>// the usual process</div>
            <div><span className={styles.codePurple}>const</span> idea = <span className={styles.codePink}>'what if...'</span></div>
            <div><span className={styles.codePurple}>while</span> (curious) {'{'}</div>
            <div>&nbsp;&nbsp;learn()</div>
            <div>&nbsp;&nbsp;build(idea)</div>
            <div>&nbsp;&nbsp;<span className={styles.codeBlue}>makeItWork</span>()</div>
            <div>{'}'}</div>
          </div>

          <div className={styles.focusList}>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon} aria-hidden="true">⌘</span>
              Systems & software
            </div>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon} aria-hidden="true">◇</span>
              Developer tools & experiments
            </div>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon} aria-hidden="true">♡</span>
              Games & creative projects
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
