/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize from 'rehype-sanitize'
import rehypeReact from 'rehype-react'
import defaultSchema from 'hast-util-sanitize/lib/github'
import { useLayout } from 'src/layouts/AppLayout/AppLayout'

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes.code || []), 'className'],
    span: [...(defaultSchema.attributes.span || []), 'className'],
  },
}

const filterWhitespace = (node) =>
  !(typeof node === 'string' && node.trim() === '')

const Table = ({ children, ...props }) => (
  <Themed.table {...props}>{children.filter(filterWhitespace)}</Themed.table>
)

const TableHead = ({ children, ...props }) => (
  <thead {...props}>{children.filter(filterWhitespace)}</thead>
)

const TableBody = ({ children, ...props }) => (
  <tbody {...props}>{children.filter(filterWhitespace)}</tbody>
)

const TableRow = ({ children, ...props }) => (
  <Themed.tr {...props}>{children.filter(filterWhitespace)}</Themed.tr>
)

const Sup = ({ children, ...props }) => (
  <sup
    sx={{
      fontSize: '75%',
      lineHeight: 0,
      position: 'relative',
      verticalAlign: 'baseline',
      top: '-0.5em',
    }}
    {...props}
  >
    {children}
  </sup>
)

const Sub = ({ children, ...props }) => (
  <sup
    sx={{
      fontSize: '75%',
      lineHeight: 0,
      position: 'relative',
      verticalAlign: 'baseline',
      bottom: '-0.25em',
    }}
    {...props}
  >
    {children}
  </sup>
)

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeHighlight)
  .use(rehypeSanitize, schema)
  .use(rehypeReact, {
    createElement: jsx,
    components: {
      h1: Themed.h1,
      h2: Themed.h2,
      h3: Themed.h3,
      p: Themed.p,
      ul: Themed.ul,
      ol: Themed.ol,
      table: Table,
      thead: TableHead,
      tbody: TableBody,
      tr: TableRow,
      th: Themed.th,
      td: Themed.td,
      sup: Sup,
      sub: Sub,
    },
  })

const MarkdownView = ({ value }) => {
  const { highlightClass, wordWrap } = useLayout()
  return (
    <div className={`${highlightClass} ${wordWrap ? 'rco-wrap-hljs' : ''}`}>
      {processor.processSync(value).result}
    </div>
  )
}

export default MarkdownView
