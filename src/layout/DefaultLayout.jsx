/**
 * DefaultLayout Component
 *
 * Main application layout wrapper that composes the primary UI structure
 * for authenticated/protected routes.
 *
 * Layout structure:
 * - AppSidebar: Collapsible navigation sidebar
 * - AppHeader: Top navigation bar with user menu and theme switcher
 * - AppContent: Main content area with route rendering
 * - AppFooter: Footer with links and copyright
 *
 * This layout is used for all routes defined in routes.js, providing
 * a consistent structure across the application.
 *
 * @component
 * @example
 * // Used in App.js for protected routes
 * <Route path="*" element={<DefaultLayout />} />
 */

import React from 'react'
import { CContainer } from '@coreui/react'

import Dashboard from '../views/dashboard/Dashboard'

/**
 * DefaultLayout functional component
 *
 * Renders the main application layout with:
 * - Fixed sidebar navigation
 * - Sticky header
 * - Flexible content area
 * - Footer at bottom
 *
 * Uses flexbox for proper content stretching and footer positioning.
 *
 * @returns {React.ReactElement} Complete application layout
 */
const DefaultLayout = () => {
  return (
    <div className="page-shell">
      <CContainer className="py-4 py-md-5">
        <div className="page-shell__intro mb-4 mb-md-5">
          <p className="page-shell__eyebrow mb-2">Dashboard</p>
          <h1 className="page-shell__title mb-2">Gestion de acompañamiento de proyecto</h1>
          <p className="page-shell__subtitle mb-0">
            Add what is happening today, keep short notes, and stay organized in one simple place.
          </p>
        </div>
        <Dashboard />
      </CContainer>
    </div>
  )
}

export default DefaultLayout
