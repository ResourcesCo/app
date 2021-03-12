/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import AppLayout from 'src/layouts/AppLayout'
import ViewCell from 'src/components/ViewCell'
import splitPath from 'src/lib/splitPath'

const ViewPage = ({ path }) => {
  const { isAuthenticated } = useAuth()
  const [name, folder] = splitPath(path)
  return (
    <AppLayout pageInfo={{ route: 'view', path }}>
      {isAuthenticated && <ViewCell folder={folder} name={name} />}
    </AppLayout>
  )
}

export default ViewPage
