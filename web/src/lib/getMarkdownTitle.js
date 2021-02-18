import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import visit from 'unist-util-visit'

const processor = unified().use(remarkParse).use(remarkGfm)

const getMarkdownTitle = (text) => {
  let heading, depth
  const tree = processor.runSync(processor.parse(text), text)
  visit(tree, (node) => {
    if (node.type === 'heading') {
      if (depth === undefined || node.depth < depth) {
        heading = node
        depth = node.depth
      }
    }
  })
  if (heading) {
    const textNodes = []
    visit(heading, (node) => {
      if (node.type === 'text') {
        textNodes.push(node)
      }
    })
    if (textNodes.length > 0) {
      return textNodes.map(({ value }) => value).join('')
    }
  }
}

export default getMarkdownTitle
