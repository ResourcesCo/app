/** @jsx jsx */
import { Link, routes } from '@redwoodjs/router'
import { jsx, Box, Text, Container } from 'theme-ui'

export const QUERY = gql`
  query ListQuery {
    pages {
      id
      name
      path
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ pages }) => {
  return pages.map(({ id, name, path }) => (
    <Container key={id} sx={{ maxWidth: 768, p: 2, pt: 4, mx: 'auto' }}>
      <Box>
        <Box>
          <Link to={routes.view({ path })} sx={{ color: 'primary' }}>
            {name}
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontSize: 1, color: 'gray' }}>{path}</Text>
        </Box>
      </Box>
    </Container>
  ))
}
