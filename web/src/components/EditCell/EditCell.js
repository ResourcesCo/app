/** @jsx jsx */
import { jsx } from 'theme-ui'
import PageEditor from 'src/components/page/PageEditor/PageEditor'

export const QUERY = gql`
  query PageQuery($path: String!) {
    page(path: $path) {
      path
      name
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ page: { path, name: title, body } }) => {
  return <PageEditor path={path} title={title} body={body} />
}
