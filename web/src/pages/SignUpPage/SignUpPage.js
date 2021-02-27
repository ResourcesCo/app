import { Link, routes } from '@redwoodjs/router'

const SignUpPage = () => {
  return (
    <>
      <h1>SignUpPage</h1>
      <p>
        Find me in <code>./web/src/pages/SignUpPage/SignUpPage.js</code>
      </p>
      <p>
        My default route is named <code>signUp</code>, link to me with `
        <Link to={routes.signUp()}>SignUp</Link>`
      </p>
    </>
  )
}

export default SignUpPage
