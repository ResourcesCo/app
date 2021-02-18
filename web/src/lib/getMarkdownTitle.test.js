import getMarkdownTitle from './getMarkdownTitle'

const helloWorldExamples = {
  basic: `# Hello, world.`,
  textAboveTitle: `some random text

# Hello, world.`,
  twoHeadings: `some random text

# Hello, world.

# Test`,
  mainHeadingBelow: `some random text

## Test

# Hello, world.`,
}

const noHeadingExamples = {
  basic: `No heading

  test`,
  hashMarks: `Test ###`,
  code: `    # hello`,
}

describe('getMarkdownTitle', () => {
  it('gets the title', () => {
    for (const value of Object.values(helloWorldExamples)) {
      expect(getMarkdownTitle(value)).toEqual('Hello, world.')
    }
  })
  it('returns undefined with no title', () => {
    for (const value of Object.values(noHeadingExamples)) {
      expect(getMarkdownTitle(value)).toBe(undefined)
    }
  })
})
