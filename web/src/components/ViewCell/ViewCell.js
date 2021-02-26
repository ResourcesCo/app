/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Title } from 'src/layouts/AppLayout'
import MarkdownView from 'src/components/MarkdownView'

export const QUERY = gql`
  query PageQuery($name: String!, $folder: String!) {
    page(name: $name, folder: $folder) {
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ page: { title, body } }) => {
  return (
    <Container sx={{ maxWidth: 768, p: 2, pt: 4, mx: 'auto' }}>
      <Title>{title}</Title>
      <MarkdownView value={body} />
    </Container>
  )
}
