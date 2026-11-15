import MainLayout from '../layouts/MainLayout'
import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <MainLayout>
      <article className={styles.page}>
        <header className={styles.header}>
          <span className={styles.label}>A LITTLE INTRODUCTION</span>
          <h1 className={styles.title}>About me<span>.</span></h1>
          <p className={styles.lead}>
            I'm a developer, a curious person, and someone who likes making
            things just to find out what I can do with an idea.
          </p>
        </header>

        <div className={styles.body}>
          <p>
            A lot of my time goes into programming and exploring how
            technology works. I enjoy building my own software, experimenting
            with systems and figuring out how all the pieces fit together.
            I'm not tied to one particular kind of project — if something
            catches my interest, I want to understand it and try it myself.
          </p>

          <p>
            I spend plenty of time around Linux and open-source software.
            I enjoy working with languages like Rust and Python, exploring
            lower-level concepts, and learning about the security side of
            computing. I also like customising my environment and making my
            computer feel like my own.
          </p>

          <p>
            Programming isn't the only thing I enjoy. Gaming and game
            modding are big interests too, especially the creative side of
            changing, extending and experimenting with games. I like projects
            that let me combine technical problem-solving with creativity.
          </p>

          <p>
            The way I learn is by doing. I would rather take something apart,
            experiment with it and understand why it works than simply copy
            an answer. I still have a lot to learn, and that's part of what
            keeps programming interesting to me.
          </p>
        </div>

        <footer className={styles.footer}>
          <span aria-hidden="true">✧</span>
          <p>That's a little bit about me. Thanks for stopping by.</p>
        </footer>
      </article>
    </MainLayout>
  )
}

export default AboutPage
