/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'
import AppLayout from 'src/layouts/AppLayout'
import CreateMenu from './CreateMenu'

describe('CreateMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <AppLayout>
            <CreateMenu />{' '}
          </AppLayout>
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
