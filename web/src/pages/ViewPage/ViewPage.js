/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import AppLayout from 'src/layouts/AppLayout'
import ViewCell from 'src/components/ViewCell'
import { MenuItem } from '@szhsin/react-menu'
import { navigate, routes } from '@redwoodjs/router'
import splitPath from 'src/lib/splitPath'

const ViewPage = ({ path }) => {
  const { isAuthenticated } = useAuth()
  const [name, folder] = splitPath(path)
  const pageMenuItems = (
    <MenuItem onClick={() => navigate(routes.edit({ path }))}>Edit</MenuItem>
  )
  return (
    <AppLayout pageMenuItems={pageMenuItems}>
      {isAuthenticated && <ViewCell folder={folder} name={name} />}
    </AppLayout>
  )
}

export default ViewPage
