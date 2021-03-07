/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'

import SignUpPage from './SignUpPage'

describe('SignUpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <SignUpPage />{' '}
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
