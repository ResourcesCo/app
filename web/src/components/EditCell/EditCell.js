/** @jsx jsx */
import { jsx } from 'theme-ui'
import PageEditor from 'src/components/page/PageEditor/PageEditor'

export const QUERY = gql`
  query PageQuery($name: String!, $folder: String!) {
    page(name: $name, folder: $folder) {
      name
      folder
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ page: { name, folder, title, body } }) => {
  return <PageEditor name={name} folder={folder} title={title} body={body} />
}
