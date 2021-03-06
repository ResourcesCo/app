export const schema = gql`
  type User {
    id: String!
    name: String!
    email: String!
    bot: Boolean!
    actions: [Action]!
  }

  type CurrentUser {
    id: String
    name: String
    username: String
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    updateCurrentUser(name: String, username: String): CurrentUser
  }
`
