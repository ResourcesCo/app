export const schema = gql`
  type Page {
    id: String!
    name: String!
    folder: String!
    title: String!
    body: String!
    meta: String!
    computed: JSON!
    createdAt: DateTime!
    actions: [Action]!
  }

  type Query {
    pages: [Page!]!
    page(folder: String!, name: String!): Page
  }

  input CreatePageInput {
    title: String!
    body: String!
  }

  input EditPageInput {
    name: String!
    folder: String!
    title: String!
    body: String!
  }

  type Mutation {
    createPage(input: CreatePageInput!): Page
    editPage(input: EditPageInput!): Page
  }
`
