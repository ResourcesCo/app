import { render } from '@redwoodjs/testing'

import MarkdownView from './MarkdownView'

describe('MarkdownView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarkdownView />)
    }).not.toThrow()
  })
})
