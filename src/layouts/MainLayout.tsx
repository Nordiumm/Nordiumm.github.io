import type { ReactNode } from 'react'

import Navigation from '../components/shared/Navigation/Navigation'
import Footer from '../components/shared/Footer/Footer'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navigation />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout