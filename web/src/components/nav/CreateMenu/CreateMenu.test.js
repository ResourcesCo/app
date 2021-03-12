import { render } from '@redwoodjs/testing'
import CreateMenu from './CreateMenu'

describe('CreateMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateMenu />)
    }).not.toThrow()
  })
})
