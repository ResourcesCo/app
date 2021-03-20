/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'
import AppLayout from 'src/layouts/AppLayout'
import AppMenu from './AppMenu'

describe('AppMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <AppLayout>
            <AppMenu />
          </AppLayout>
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
