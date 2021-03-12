/** @jsx jsx */
import { Link, routes } from '@redwoodjs/router'
import joinPath from 'src/lib/joinPath'
import { jsx, Box, Text, Container } from 'theme-ui'

export const QUERY = gql`
  query ListQuery {
    pages {
      id
      name
      folder
      title
    }
  }
`

export const Loading = () => null

export const Empty = () => null

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ pages }) => {
  return pages.map(({ id, name, folder, title }) => (
    <Container key={id} sx={{ maxWidth: 768, p: 2, pt: 4, mx: 'auto' }}>
      <Box>
        <Box>
          <Link
            to={routes.view({ path: joinPath(name, folder) })}
            sx={{ color: 'primary' }}
          >
            {title}
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontSize: 1, color: 'gray' }}>
            {joinPath(name, folder)}
          </Text>
        </Box>
      </Box>
    </Container>
  ))
}
