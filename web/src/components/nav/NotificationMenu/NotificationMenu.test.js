import { render } from '@redwoodjs/testing'
import NotificationMenu from './NotificationMenu'

describe('NotificationMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationMenu />)
    }).not.toThrow()
  })
})
