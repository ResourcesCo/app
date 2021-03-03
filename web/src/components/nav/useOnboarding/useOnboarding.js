import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes, useLocation } from '@redwoodjs/router'

export default function useOnboarding({ requireOnboarding = false }) {
  const { currentUser } = useAuth()
  const { path } = useLocation()
  useEffect(() => {
    if (requireOnboarding && currentUser && !currentUser.username) {
      if (!routes.signUp().endsWith(path)) {
        navigate(routes.signUp())
      }
    }
  }, [currentUser, path])
}
