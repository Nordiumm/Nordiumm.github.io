export interface NavigationItem {
  label: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Now', href: '/now' },
  { label: 'Setup', href: '/setup' },
  { label: 'Socials', href: '/socials' },
]