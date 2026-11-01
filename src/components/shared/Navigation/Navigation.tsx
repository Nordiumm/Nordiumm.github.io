import { Link } from 'react-router-dom'

import { useTheme } from '../../../features/theme'
import { navigationItems } from '../../../data/navigation'

import styles from './Navigation.module.css'

function Navigation() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.logo}>
        Nordiumm<span>♡</span>
      </Link>

      <div className={styles.right}>
        <div className={styles.links}>
          {navigationItems.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  )
}

export default Navigation