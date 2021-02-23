export const schema = gql`
  type Page {
    id: String!
    name: String!
    path: String!
    body: String!
    metadata: JSON!
    computed: JSON!
    createdAt: DateTime!
    actions: [Action]!
  }

  type Query {
    pages: [Page!]!
    page(path: String!): Page
  }

  input CreatePageInput {
    title: String!
    body: String!
  }

  input EditPageInput {
    title: String!
    path: String!
    body: String!
  }

  type Mutation {
    createPage(input: CreatePageInput!): Page
    editPage(input: EditPageInput!): Page
  }
`
