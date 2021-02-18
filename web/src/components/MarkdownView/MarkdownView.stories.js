import MarkdownView from './MarkdownView'

export const cheems = () => {
  return (
    <MarkdownView
      value={`# test

| table |
---------
| 12342 |
| 34932 |

Hello`}
    />
  )
}

export default { title: 'Components/MarkdownView' }
