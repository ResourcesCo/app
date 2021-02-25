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
import { useState, useRef } from 'react'
import { useMutation } from '@redwoodjs/web'
import { navigate } from '@redwoodjs/router'
import { Title } from 'src/layouts/AppLayout'
import getMarkdownTitle from 'src/lib/getMarkdownTitle'
import CodeEditor from 'src/components/page/CodeEditor'
import MarkdownView from 'src/components/MarkdownView'

const CREATE_PAGE_MUTATION = gql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      id
      name
      path
    }
  }
`

const EDIT_PAGE_MUTATION = gql`
  mutation EditPageMutation($input: EditPageInput!) {
    editPage(input: $input) {
      id
      name
      path
    }
  }
`

const PageEditor = ({ path, body }) => {
  const editing = path !== undefined
  const mutation = editing ? EDIT_PAGE_MUTATION : CREATE_PAGE_MUTATION
  const mutationPageKey = editing ? 'editPage' : 'createPage'

  const [preview, setPreview] = useState(false)
  const editorViewRef = useRef()
  const [mutate, { loading, error }] = useMutation(mutation, {
    onCompleted({ [mutationPageKey]: { path } }) {
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
      <div sx={preview ? { display: 'none' } : {}}>
        <CodeEditor
          language="markdown"
          showLineNumbers={false}
          editorViewRef={editorViewRef}
          initialValue={body || ''}
        />
      </div>
      {preview && (
        <MarkdownView value={editorViewRef.current.state.doc.toString()} />
      )}
      <Flex sx={{ my: 3 }}>
        <div sx={{ flexGrow: 1 }}>
          <Button
            mr={2}
            onClick={() => {
              const body = editorViewRef.current.state.doc.toString()
              mutate({
                variables: {
                  input: {
                    ...(editing ? { path } : {}),
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
            <Checkbox
              checked={preview}
              onChange={({ target: { checked } }) => setPreview(checked)}
            />
            Preview
          </Label>
        </Box>
      </Flex>
    </Container>
  )
}

export default PageEditor
