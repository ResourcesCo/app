// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import HomePage from 'src/pages/HomePage'
import NewPage from 'src/pages/NewPage'

const userRouteParamTypes = {
  path: {
    constraint: /(?!-[\/$])[^/]+(?:\/(?!-[\/$])[^/]+)*/,
  },
}

const Routes = () => {
  return (
    <Router paramTypes={userRouteParamTypes}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/{path:path}" page={ViewPage} name="view" />
      <Route path="/{path:path}/-/edit" page={EditPage} name="edit" />
      <Route path="/-/new" page={NewPage} name="new" />
      <Route path="/-/sign-up" page={SignUpPage} name="signUp" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
