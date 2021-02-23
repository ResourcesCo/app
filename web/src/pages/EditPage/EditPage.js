/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import AppLayout from 'src/layouts/AppLayout'
import EditCell from 'src/components/EditCell'

const EditPage = ({ path }) => {
  const { isAuthenticated } = useAuth()
  return <AppLayout>{isAuthenticated && <EditCell path={path} />}</AppLayout>
}

export default EditPage
