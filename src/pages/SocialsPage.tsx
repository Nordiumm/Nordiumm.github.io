import MainLayout from '../layouts/MainLayout'

import SocialCard from '../features/socials/components/SocialCard/SocialCard'
import { socials } from '../features/socials/data/socials'

import styles from './SocialsPage.module.css'

function SocialsPage() {
  return (
    <MainLayout>
      <section className={styles.socials}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>ELSEWHERE</span>

          <h1>Socials</h1>

          <p>
            Find me on other platforms across the internet.
          </p>
        </header>

        <div className={styles.socialList}>
          {socials.map((social) => (
            <SocialCard
              key={social.id}
              social={social}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  )
}

export default SocialsPage