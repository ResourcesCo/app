/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import AppLayout from 'src/layouts/AppLayout'
import EditCell from 'src/components/EditCell'
import splitPath from 'src/lib/splitPath'

const EditPage = ({ path }) => {
  const { isAuthenticated } = useAuth()
  const [name, folder] = splitPath(path)
  return (
    <AppLayout requireOnboarding={true}>
      {isAuthenticated && <EditCell name={name} folder={folder} />}
    </AppLayout>
  )
}

export default EditPage
