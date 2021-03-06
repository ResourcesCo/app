/** @jsx jsx */
import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'
import {
  jsx,
  Box,
  Label,
  Input,
  Button,
  Checkbox,
  Spinner,
  Message,
} from 'theme-ui'
import { useLayout } from 'src/layouts/AppLayout/AppLayout'

const UPDATE_CURRENT_USER_MUTATION = gql`
  mutation UpdateCurrentUserMutation($username: String!) {
    updateCurrentUser(username: $username) {
      username
    }
  }
`

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const { nextPage } = useLayout()
  const { reauthenticate } = useAuth()
  const [mutate, { loading, error }] = useMutation(
    UPDATE_CURRENT_USER_MUTATION,
    {
      async onCompleted() {
        await reauthenticate()
        navigate(nextPage || '/')
      },
    }
  )
  const valid = username.length >= 3 && termsAccepted
  return (
    <Box
      as="form"
      onSubmit={(e) => {
        e.preventDefault()
        mutate({ variables: { username: username } })
      }}
    >
      {error && (
        <Message variant="error" sx={{ mb: 3 }}>
          {error.message}
        </Message>
      )}
      <Label htmlFor="username">Username</Label>
      <Input
        name="username"
        mb={3}
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
      />
      {process.env.REDWOOD_ENV_TERMS_URL &&
        process.env.REDWOOD_ENV_PRIVACY_URL && (
          <Box>
            <Label mb={3}>
              <Checkbox
                checked={termsAccepted}
                onChange={({ target: { checked } }) =>
                  setTermsAccepted(checked)
                }
              />
              <span>I agree to the&nbsp;</span>
              <a
                href={process.env.REDWOOD_ENV_TERMS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Terms and Conditions
              </a>
              <span>&nbsp;and&nbsp;</span>
              <a
                href={process.env.REDWOOD_ENV_PRIVACY_URL}
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </Label>
          </Box>
        )}
      <Button
        type="submit"
        variant={valid ? 'primary' : 'primaryDisabled'}
        disabled={!valid}
      >
        Sign Up
        {loading && (
          <Spinner sx={{ color: 'white', size: 18, ml: 2, mb: '-3px' }} />
        )}
      </Button>
    </Box>
  )
}

export default SignUpForm
