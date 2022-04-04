import { gql } from '@apollo/client'

const createUserMutation = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`

export {
  createUserMutation
}