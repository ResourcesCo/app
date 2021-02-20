import { useAuth } from '@redwoodjs/auth'
import AppLayout from 'src/layouts/AppLayout'
import ViewCell from 'src/components/ViewCell'

const HomePage = ({ path }) => {
  const { isAuthenticated } = useAuth()
  return <AppLayout>{isAuthenticated && <ViewCell path={path} />}</AppLayout>
}

export default HomePage
