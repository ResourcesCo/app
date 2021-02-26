/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import HomePage from './HomePage'
import theme from 'src/theme'

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
