/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { netlify as netlifyClient } from '@redwoodjs/auth/dist/authClients/netlify'
import ReactDOM from 'react-dom'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import theme from './theme'
import Routes from 'src/Routes'

import '@szhsin/react-menu/dist/index.css'
import './index.css'

netlifyIdentity.init()

// Monkey-patch netlifyClient to refresh the token
netlifyClient.getToken = async () => {
  const getJwt = netlifyIdentity.currentUser()?.jwt
  if (getJwt) {
    const jwt = await getJwt()
    return jwt || null
  }
}

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodApolloProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
