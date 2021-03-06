/** @jsx jsx */
import { jsx, Container, Themed } from 'theme-ui'
import AppLayout, { Title } from 'src/layouts/AppLayout/AppLayout'
import SignUpForm from 'src/components/user/SignUpForm'

const SignUpPage = () => {
  return (
    <AppLayout>
      <Title>Sign Up</Title>
      <Container sx={{ maxWidth: 768, p: 2, pt: 4, mx: 'auto' }}>
        <Themed.h1>Sign Up</Themed.h1>
        <SignUpForm />
      </Container>
    </AppLayout>
  )
}

export default SignUpPage
