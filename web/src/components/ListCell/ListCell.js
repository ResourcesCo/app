/** @jsx jsx */
import { Link, routes } from '@redwoodjs/router'
import { jsx, Box, Text, Link as ThemeLink, Container } from 'theme-ui'

export const QUERY = gql`
  query ListQuery {
    pages {
      name
      path
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ pages }) => {
  return (pages.map(({ name, path }) => (
    <Container sx={{ maxWidth: 768, p: 2, pt: 4, mx: 'auto' }}>
      <Box>
        <Box>
          <Link to={routes.view({ path })}>
            <ThemeLink>
              {name}
            </ThemeLink>
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontSize: 1, color: 'gray' }}>
            {path}
          </Text>
        </Box>
      </Box>
    </Container>
  )))
}
