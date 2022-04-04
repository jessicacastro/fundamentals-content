import { useQuery } from '@apollo/client'
import { NewUserForm } from './components/NewUserForm';
import { getUsers } from './queries/getUsers'

type User = {
  id: string;
  name: string;
}

function App() {

  const { data, loading } = useQuery<{ users: User[] }>(getUsers)
  console.log(data)

  if (loading) return <p>Carregando...</p>

  return (
    <>
    <ul>
      {
        data && data.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      }
    </ul>

    <NewUserForm />
    </>
  )
}

export default App
