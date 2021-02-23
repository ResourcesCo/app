/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import PageEditor from 'src/components/page/PageEditor/PageEditor'
import AppLayout from 'src/layouts/AppLayout'

const NewPage = () => {
  const { isAuthenticated } = useAuth()
  return <AppLayout>{isAuthenticated && <PageEditor />}</AppLayout>
}

export default NewPage
