import {
  siGithub,
  siModrinth,
  siYoutube,
  siTwitch,
  siX,
  siSteam,
} from 'simple-icons'

import type { Social } from '../../data/socials'
import styles from './SocialCard.module.css'

interface SocialCardProps {
  social: Social
}

const icons = {
  github: siGithub,
  modrinth: siModrinth,
  youtube: siYoutube,
  twitch: siTwitch,
  x: siX,
  steam: siSteam
}

function SocialCard({ social }: SocialCardProps) {
  const icon = icons[social.id as keyof typeof icons]

  return (
    <a
      href={social.url || undefined}
      target="_blank"
      rel="noreferrer"
      className={styles.socialCard}
      aria-disabled={!social.url}
      onClick={(event) => {
        if (!social.url) event.preventDefault()
      }}
    >
      <div className={styles.socialIcon}>
        {icon && (
          <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label={social.name}
            className={styles.icon}
          >
            <path d={icon.path} />
          </svg>
        )}
      </div>

      <div className={styles.socialInfo}>
        <span className={styles.socialName}>
          {social.name}
        </span>

        <span className={styles.socialUsername}>
          @{social.username}
        </span>
      </div>

      <span className={styles.socialArrow}>↗</span>
    </a>
  )
}

export default SocialCard