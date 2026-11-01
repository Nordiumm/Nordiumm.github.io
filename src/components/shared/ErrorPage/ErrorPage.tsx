
import { Link } from 'react-router-dom'

import MainLayout from '../../../layouts/MainLayout'
import styles from './ErrorPage.module.css'

interface ErrorPageProps {
  code: string
  label: string
  title: string
  description: string
}

function ErrorPage({
  code,
  label,
  title,
  description,
}: ErrorPageProps) {
  return (
    <MainLayout>
      <section className={styles.page}>
        <div className={styles.content}>
          <span className={styles.label}>
            ✧ {label}
          </span>

          <h1 className={styles.title}>
            {title}
          </h1>

          <p className={styles.description}>
            {description}
          </p>

          <div className={styles.status}>
            <span>{code}</span>
            <span>{label.toLowerCase()}</span>
          </div>

          <div className={styles.actions}>
            <Link to="/" className={styles.primaryButton}>
              ← Back home
            </Link>

            <Link to="/projects" className={styles.secondaryButton}>
              Explore projects ↗
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default ErrorPage
