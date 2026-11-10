import MainLayout from '../layouts/MainLayout'
import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <MainLayout>
      <section className={styles.page}>
        <header className={styles.header}>
          <span className={styles.label}>A LITTLE ABOUT ME</span>

          <h1 className={styles.title}>Curious by nature. A builder by choice.</h1>

          <p className={styles.description}>
            I'm someone who likes understanding how things work, taking ideas apart
            and seeing what I can create from them. Programming gives me a way to
            turn that curiosity into something real.
          </p>
        </header>

        <div className={styles.content}>
          <article className={styles.card}>
            <h2>What I enjoy creating</h2>
            <p>
              I like building independent software projects and exploring the
              engineering behind them. I'm especially interested in systems,
              architecture, programming languages and the little details that
              make software work well.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Things that interest me</h2>
            <p>
              Outside of writing code, I enjoy gaming, Linux, technology and
              cybersecurity. I like following a question down a rabbit hole and
              learning something unexpected along the way.
            </p>
          </article>

          <article className={styles.card}>
            <h2>How I like to work</h2>
            <p>
              I prefer experimenting, learning by building and making things
              understandable rather than adding complexity for its own sake.
              Projects are a place to explore ideas and improve as I go.
            </p>
          </article>

          <article className={styles.card}>
            <h2>A work in progress</h2>
            <p>
              I'm always exploring new ideas, languages and directions. This
              website is a small snapshot of what I'm making and what I'm
              interested in at the moment.
            </p>
          </article>
        </div>
      </section>
    </MainLayout>
  )
}

export default AboutPage
