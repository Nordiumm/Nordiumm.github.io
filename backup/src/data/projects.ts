export interface Project {
  name: string
  description: string
  technologies: string[]
  github?: string
  status?: string
  order: number
}

type MarkdownModule = Record<string, string>

const projectFiles = import.meta.glob('../../projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as MarkdownModule

function parseProject(source: string, path: string): Project | null {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/)

  if (!match) {
    console.warn(`Skipping project without frontmatter: ${path}`)
    return null
  }

  const metadata: Record<string, string> = {}

  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':')
    if (separator === -1) continue

    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim()
    metadata[key] = value.replace(/^["']|["']$/g, '')
  }

  if (!metadata.name || !metadata.description) {
    console.warn(`Skipping project missing name or description: ${path}`)
    return null
  }

  const technologies = (metadata.technologies ?? '')
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((technology) => technology.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)

  return {
    name: metadata.name,
    description: metadata.description,
    technologies,
    github: metadata.github || undefined,
    status: metadata.status || undefined,
    order: Number(metadata.order) || 999,
  }
}

export const projects: Project[] = Object.entries(projectFiles)
  .map(([path, source]) => parseProject(source, path))
  .filter((project): project is Project => project !== null)
  .sort((a, b) => a.order - b.order)
