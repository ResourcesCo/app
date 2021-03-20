/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { render } from '@redwoodjs/testing'
import theme from 'src/theme'
import AppLayout from 'src/layouts/AppLayout'
import AvatarMenu from './AvatarMenu'

describe('AvatarMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <AppLayout>
            <AvatarMenu />
          </AppLayout>
        </ThemeProvider>
      )
    }).not.toThrow()
  })
})
