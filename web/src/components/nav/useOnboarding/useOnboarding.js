import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes, useLocation } from '@redwoodjs/router'
import { useLayout } from 'src/layouts/AppLayout/AppLayout'

export default function useOnboarding({ requireOnboarding = false }) {
  const { currentUser } = useAuth()
  const { path } = useLocation()
  const { setNextPage } = useLayout
  useEffect(() => {
    if (requireOnboarding && currentUser && !currentUser.username) {
      if (!routes.signUp().endsWith(path)) {
        setNextPage(path)
        navigate(routes.signUp())
      }
    }
  }, [currentUser, path, setNextPage, requireOnboarding])
}
