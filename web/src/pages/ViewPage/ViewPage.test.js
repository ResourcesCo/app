import { render } from '@redwoodjs/testing'

import ViewPage from './ViewPage'

describe('ViewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewPage />)
    }).not.toThrow()
  })
})
