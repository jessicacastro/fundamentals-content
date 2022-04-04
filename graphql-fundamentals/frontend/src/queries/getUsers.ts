import { gql } from '@apollo/client'

const getUsers = gql`
  query {
    users {
      id,
      name
    }
  }
`

export {
  getUsers
}