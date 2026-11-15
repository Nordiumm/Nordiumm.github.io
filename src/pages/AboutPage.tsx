import MainLayout from '../layouts/MainLayout'
import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <MainLayout>
      <section className={styles.page}>
        <header className={styles.header}>
          <span className={styles.label}>BEHIND THE KEYBOARD</span>

          <h1 className={styles.title}>
            A curious mind, a lot of ideas, and a soft spot for building things.
          </h1>

          <p className={styles.description}>
            I'm an independent developer who enjoys making things, understanding
            how they work and exploring the technology behind them. I tend to
            follow ideas wherever they lead — from low-level systems to game
            projects and little experiments.
          </p>
        </header>

        <div className={styles.content}>
          <article className={styles.card}>
            <span className={styles.cardIndex}>01 / WHAT I BUILD</span>
            <h2>Software with a purpose.</h2>
            <p>
              I like creating projects that feel worth making: software, tools,
              experiments and game-related ideas. I'm especially drawn to the
              parts beneath the surface — how systems fit together, how things
              communicate and how to make an idea actually work.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardIndex}>02 / WHAT I LIKE</span>
            <h2>More than just code.</h2>
            <p>
              Linux, programming, gaming and cybersecurity are big interests of
              mine. I enjoy exploring how computers work, tweaking my setup,
              learning new technologies and getting lost in a good technical
              rabbit hole.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardIndex}>03 / HOW I WORK</span>
            <h2>Learn by making.</h2>
            <p>
              I learn best by experimenting and building things myself. I like
              understanding why something works instead of blindly copying a
              solution, and I'm not afraid to take a project apart and try a
              different approach.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardIndex}>04 / A LITTLE PERSONALITY</span>
            <h2>Technical, curious, and a little creative.</h2>
            <p>
              I can spend hours exploring a technical problem, then switch to
              working on something completely different. I like having room
              to experiment, make things my own and add a bit of personality
              to everything I create.
            </p>
          </article>
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerSparkle}>✧</span>
          <p>Still learning, still building, always curious.</p>
        </footer>
      </section>
    </MainLayout>
  )
}

export default AboutPage
