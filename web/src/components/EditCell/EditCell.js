export const QUERY = gql`
  query EditQuery {
    edit {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ edit }) => {
  return JSON.stringify(edit)
}
