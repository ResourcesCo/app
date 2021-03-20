/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'

import EditPage from './EditPage'

describe('EditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <EditPage path="/" />
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
