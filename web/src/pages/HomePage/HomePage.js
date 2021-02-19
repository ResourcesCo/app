import AppLayout from 'src/layouts/AppLayout'
import ListCell from 'src/components/ListCell'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return (
    <AppLayout>
      {isAuthenticated && <ListCell />}
    </AppLayout>
  )
}

export default HomePage
