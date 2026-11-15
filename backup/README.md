# Nordiumm — Personal Website

My personal website and developer portfolio, built with React, TypeScript and Vite.

## Development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Adding a project

Projects are loaded automatically from Markdown files in the root `projects/` directory. Add a new file such as `projects/my-project.md`:

```md
---
name: My project
description: A short description shown on the project card.
technologies: [rust, typescript]
github: https://github.com/username/repository
status: In development
order: 4
---

# My project

Optional notes about the project.
```

Supported frontmatter fields:
- `name` and `description` are required.
- `technologies` must use IDs from `src/data/technologies.ts`.
- `github` is optional.
- `status` is optional.
- `order` controls display order (lower numbers appear first).

The project list is generated at build time, so adding or editing a Markdown file requires a new deployment.

## Updating the Now and Setup pages

Edit `src/data/now.ts` and `src/data/setup.ts`. Their page layouts remain unchanged.
