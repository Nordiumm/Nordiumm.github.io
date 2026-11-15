import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import AboutPage from '../pages/AboutPage'
import SocialsPage from '../pages/SocialsPage'
import NowPage from '../pages/NowPage'
import SetupPage from '../pages/SetupPage'

import BadRequestPage from '../pages/errors/BadRequestPage'
import UnauthorizedPage from '../pages/errors/UnauthorizedPage'
import ForbiddenPage from '../pages/errors/ForbiddenPage'
import NotFoundPage from '../pages/errors/NotFoundPage'
import RequestTimeoutPage from '../pages/errors/RequestTimeoutPage'
import TooManyRequestsPage from '../pages/errors/TooManyRequestsPage'
import ServerErrorPage from '../pages/errors/ServerErrorPage'
import BadGatewayPage from '../pages/errors/BadGatewayPage'
import ServiceUnavailablePage from '../pages/errors/ServiceUnavailablePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/socials" element={<SocialsPage />} />

        {/* Error pages */}
        <Route path="/400" element={<BadRequestPage />} />
        <Route path="/401" element={<UnauthorizedPage />} />
        <Route path="/403" element={<ForbiddenPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/408" element={<RequestTimeoutPage />} />
        <Route path="/429" element={<TooManyRequestsPage />} />
        <Route path="/500" element={<ServerErrorPage />} />
        <Route path="/502" element={<BadGatewayPage />} />
        <Route path="/503" element={<ServiceUnavailablePage />} />

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
