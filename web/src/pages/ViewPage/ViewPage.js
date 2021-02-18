import AppLayout from 'src/layouts/AppLayout'
import ViewCell from 'src/components/ViewCell'

const HomePage = ({ path }) => {
  return (
    <AppLayout>
      <ViewCell path={path} />
    </AppLayout>
  )
}

export default HomePage
