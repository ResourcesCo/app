import { useAuth } from '@redwoodjs/auth'
import PageEditor from '../../components/page/PageEditor/PageEditor'
import AppLayout from '../../layouts/AppLayout'

const NewPage = () => {
  const { isAuthenticated } = useAuth()
  return <AppLayout>{isAuthenticated && <PageEditor />}</AppLayout>
}

export default NewPage
