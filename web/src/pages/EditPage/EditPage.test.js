import { render } from '@redwoodjs/testing'

import EditPage from './EditPage'

describe('EditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPage />)
    }).not.toThrow()
  })
})
