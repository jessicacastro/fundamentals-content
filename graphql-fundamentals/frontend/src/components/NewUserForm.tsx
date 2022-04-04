import { useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { client } from "../lib/apollo"
import { createUserMutation } from "../queries/createUser"
import { getUsers } from "../queries/getUsers"

export const NewUserForm = () => {
  const [name, setName] = useState('')
  const [createUser,  _] = useMutation(createUserMutation)

  const handleCreateUser = async (event: FormEvent) => {
    event.preventDefault()

    if (!name) return

    await createUser({ 
      variables: { 
        name: name
      },
      // refetchQueries: [{ query: getUsers }], This code is only necessary if we wanted go to the backend do the request again
      update: (cache, { data: { createUser }}) => {
        const { users } = client.readQuery({ query: getUsers})

        cache.writeQuery({ 
          query: getUsers,
          data: {
            users: {
              ...users,
              createUser,
            }
          }
        })
      }
    })
  }

  return (
    <form onSubmit={handleCreateUser}>
      <input 
        type="text"  
        placeholder="Insira seu nome" 
        value={name} 
        onChange={e => setName(e.target.value)} />

      <button type="submit">Enviar</button>
    </form>
  )
}