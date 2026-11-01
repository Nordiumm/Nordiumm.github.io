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
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className={styles.projectCard}
    >
      <span className={styles.projectNumber}>
        PROJECT / {String(index + 1).padStart(2, '0')}
      </span>

      <h2 className={styles.projectName}>
        {project.name}
      </h2>

      <p className={styles.projectDescription}>
        {project.description}
      </p>

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

      <span className={styles.viewProject}>
        View repository <span>↗</span>
      </span>
    </a>
  )
}

export default ProjectCard