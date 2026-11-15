import MainLayout from '../layouts/MainLayout'
import ProjectList from '../features/projects/components/ProjectList/ProjectList'
import { projects } from '../data/projects'

import styles from './ProjectsPage.module.css'

function ProjectsPage() {
  return (
    <MainLayout>
      <section className={styles.projects}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>MY WORK</span>
          <h1>Projects</h1>
          <p>
            A collection of things I've built, experimented with
            and worked on.
          </p>
        </header>

        <ProjectList projects={projects} />
      </section>
    </MainLayout>
  )
}

export default ProjectsPage
