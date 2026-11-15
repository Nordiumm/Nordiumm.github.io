import { technologies } from '../../../data/technologies'

import styles from './TechnologyList.module.css'

interface TechnologyListProps {
  technologyIds: string[]
  category?: 'language' | 'framework' | 'tool' | 'other'
}

function TechnologyList({ technologyIds, category }: TechnologyListProps) {
  const items = technologies.filter(
    (technology) =>
      technologyIds.includes(technology.id) &&
      (!category || technology.category === category),
  )

  return (
    <div className={styles.list}>
      {items.map((technology) => (
        <span className={styles.item} key={technology.id}>
          <span
            className={styles.dot}
            style={{ backgroundColor: technology.color }}
          />
          {technology.name}
        </span>
      ))}
    </div>
  )
}

export default TechnologyList