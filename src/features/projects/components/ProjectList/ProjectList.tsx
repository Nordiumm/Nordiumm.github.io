import type { Project } from '../../../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'

import styles from './ProjectList.module.css'

interface ProjectListProps {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          index={index}
        />
      ))}
    </div>
  )
}

export default ProjectList