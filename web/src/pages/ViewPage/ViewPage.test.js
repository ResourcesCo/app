/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'
import ViewPage from './ViewPage'

describe('ViewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <ViewPage path="/" />
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
