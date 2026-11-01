
import MainLayout from '../layouts/MainLayout'
import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <MainLayout>
      <section className={styles.page}>
        <header className={styles.header}>
          <span className={styles.label}>A LITTLE ABOUT ME</span>

          <h1 className={styles.title}>A bit about who I am.</h1>

          <p className={styles.description}>
            I'm a curious person who enjoys exploring ideas,
            learning new things and creating things of my own.
            Most of my time goes into technology, programming
            and gaming, but there's more to me than that.
          </p>
        </header>

        <div className={styles.content}>
          <article className={styles.card}>
            <h2>Things I enjoy</h2>
            <p>
              I enjoy programming, exploring technology and
              understanding how things work. I also have an
              interest in cybersecurity and experimenting
              with different ideas.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Outside of programming</h2>
            <p>
              Gaming is another thing I enjoy. I like getting
              immersed in different worlds, discovering games
              and spending time on things that interest me.
            </p>
          </article>
        </div>
      </section>
    </MainLayout>
  )
}

export default AboutPage
