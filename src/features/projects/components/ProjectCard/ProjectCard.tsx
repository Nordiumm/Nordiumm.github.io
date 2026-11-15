import type { Project } from '../../../../data/projects'
import { technologies } from '../../../../data/technologies'
import TechnologyList from '../../../../components/shared/TechnologyList/TechnologyList'

import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  index: number
}

const categories = [
  { id: 'language', label: 'Languages' },
  { id: 'framework', label: 'Frameworks' },
  { id: 'tool', label: 'Tools' },
  { id: 'other', label: 'Other' },
] as const

function ProjectCard({ project, index }: ProjectCardProps) {
  const usedCategories = categories.filter((category) =>
    project.technologies.some((id) =>
      technologies.some(
        (technology) =>
          technology.id === id && technology.category === category.id,
      ),
    ),
  )

  return (
    <article className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <span className={styles.projectNumber}>
          PROJECT / {String(index + 1).padStart(2, '0')}
        </span>

        {project.status && (
          <span className={styles.projectStatus}>{project.status}</span>
        )}
      </div>

      <h2 className={styles.projectName}>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer">
            {project.name}
            <span aria-hidden="true"> ↗</span>
          </a>
        ) : (
          project.name
        )}
      </h2>

      <p className={styles.projectDescription}>
        {project.description}
      </p>

      {usedCategories.length > 0 && (
        <div className={styles.technologies}>
          {usedCategories.map((category) => (
            <div className={styles.technologyRow} key={category.id}>
              <span className={styles.categoryLabel}>
                {category.label}
              </span>

              <TechnologyList
                technologyIds={project.technologies}
                category={category.id}
              />
            </div>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
