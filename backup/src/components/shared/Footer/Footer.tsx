import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.note}>
        that's about it for now <span>✧</span>
      </p>

      <p className={styles.message}>
        Thanks for taking a look around. Hope you found something interesting.
      </p>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Nordiumm</span>
        <span>made with a little ♡</span>
      </div>
    </footer>
  )
}

export default Footer