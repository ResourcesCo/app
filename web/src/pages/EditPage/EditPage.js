import { Link, routes } from '@redwoodjs/router'

const EditPage = () => {
  return (
    <>
      <h1>EditPage</h1>
      <p>
        Find me in <code>./web/src/pages/EditPage/EditPage.js</code>
      </p>
      <p>
        My default route is named <code>edit</code>, link to me with `
        <Link to={routes.edit()}>Edit</Link>`
      </p>
    </>
  )
}

export default EditPage
