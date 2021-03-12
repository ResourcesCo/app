/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import ReactDOM from 'react-dom'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import theme from './theme'
import Routes from 'src/Routes'

import '@szhsin/react-menu/dist/index.css'
import './index.css'

netlifyIdentity.init()

const currentUser = async () => {
  const currentUser = netlifyIdentity.currentUser()
  if (typeof currentUser?.jwt === 'function') {
    await currentUser.jwt()
  }
  return currentUser
}

const netlifyIdentityWrapped = new Proxy(netlifyIdentity, {
  get(target, name) {
    return name === 'currentUser' ? currentUser : target[name]
  },
})

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentityWrapped} type="netlify">
      <RedwoodApolloProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
