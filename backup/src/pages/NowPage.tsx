import MainLayout from '../layouts/MainLayout'
import { nowSections } from '../data/now'
import styles from './NowPage.module.css'

function NowPage() {
  return (
    <MainLayout>
      <section className={styles.page}>
        <header className={styles.header}>
          <span className={styles.label}>CURRENTLY</span>
          <h1>What I'm exploring right now.</h1>
          <p>A small snapshot of what has my attention lately. This page changes as my interests and projects do.</p>
        </header>

        <div className={styles.grid}>
          {nowSections.map((section) => (
            <article className={styles.card} key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className={styles.note}>This is a living page, not a checklist.</p>
      </section>
    </MainLayout>
  )
}

export default NowPage
