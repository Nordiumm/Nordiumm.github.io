export interface Project {
  name: string
  description: string
  technologies: string[]
  github: string
}

export const projects: Project[] = [
  {
    name: 'Lattice',
    description: 'A source code architecture analyzer written in Go.',
    technologies: ['go'],
    github: 'https://github.com/Nordiumm/lattice',
  },
  {
    name: '.lumi',
    description: 'A modular local AI assistant built with Python.',
    technologies: ['python'],
    github: 'https://github.com/Nordiumm/.lumi',
  },
]