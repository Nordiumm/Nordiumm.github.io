import MainLayout from '../layouts/MainLayout'
import { setupGroups } from '../data/setup'
import styles from './SetupPage.module.css'

function SetupPage() {
  return (
    <MainLayout>
      <section className={styles.page}>
        <header className={styles.header}>
          <span className={styles.label}>MY WORKSPACE</span>
          <h1>The setup behind the work.</h1>
          <p>A few of the tools and technologies I use to build, experiment and learn.</p>
        </header>

        <div className={styles.grid}>
          {setupGroups.map((group) => (
            <article className={styles.card} key={group.title}>
              <h2>{group.title}</h2>
              <dl>
                {group.items.map((item) => (
                  <div className={styles.row} key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}

export default SetupPage
