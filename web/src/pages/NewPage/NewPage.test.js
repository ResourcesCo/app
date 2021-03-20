/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'

import NewPage from './NewPage'

describe('NewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <NewPage />
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
