/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Title } from 'src/layouts/AppLayout'
import MarkdownView from 'src/components/MarkdownView'

export const QUERY = gql`
  query PageQuery($path: String!) {
    page(path: $path) {
      name
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ page: { name: title, body } }) => {
  return (
    <Container sx={{ maxWidth: 768, p: 2, pt: 4, mx: 'auto' }}>
      <Title>{title}</Title>
      <MarkdownView value={body} />
    </Container>
  )
}
