/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'
import AppLayout from 'src/layouts/AppLayout'
import PageMenu from './PageMenu'

describe('PageMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <AppLayout>
            <PageMenu />{' '}
          </AppLayout>
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
