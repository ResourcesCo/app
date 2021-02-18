/** @jsx jsx */
import {
  jsx,
  Container,
  Button,
  Flex,
  Spinner,
  Box,
  Label,
  Checkbox,
  Message,
} from 'theme-ui'
import { useRef } from 'react'
import { useMutation } from '@redwoodjs/web'
import { navigate } from '@redwoodjs/router'
import { Title } from 'src/layouts/AppLayout'
import getMarkdownTitle from 'src/lib/getMarkdownTitle'
import CodeEditor from 'src/components/page/CodeEditor'

const CREATE_PAGE_MUTATION = gql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      id
      name
      path
    }
  }
`

const PageEditor = () => {
  const editorViewRef = useRef()
  const [createPage, { loading, error }] = useMutation(CREATE_PAGE_MUTATION, {
    onCompleted({ createPage: { path } }) {
      navigate(`/${path}`)
    },
  })
  return (
    <Container sx={{ maxWidth: 768, p: 2, pt: 4, mx: 'auto' }}>
      <Title>New Page</Title>
      {error && (
        <Message variant="error" sx={{ mb: 3 }}>
          {error.message}
        </Message>
      )}
      <CodeEditor
        language="markdown"
        showLineNumbers={false}
        editorViewRef={editorViewRef}
      />
      <Flex sx={{ my: 3 }}>
        <div sx={{ flexGrow: 1 }}>
          <Button
            mr={2}
            onClick={() => {
              const body = editorViewRef.current.state.doc.toString()
              createPage({
                variables: {
                  input: {
                    title: getMarkdownTitle(body) || 'Untitled',
                    body,
                  },
                },
              })
            }}
          >
            Save
            {loading && (
              <Spinner sx={{ color: 'white', size: 18, ml: 2, mb: '-3px' }} />
            )}
          </Button>
        </div>
        <Box>
          <Label mb={3} sx={{ userSelect: 'none' }}>
            <Checkbox />
            Preview
          </Label>
        </Box>
      </Flex>
    </Container>
  )
}

export default PageEditor
