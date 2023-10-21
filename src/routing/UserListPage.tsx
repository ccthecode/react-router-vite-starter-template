import { Link } from "react-router-dom"

const UserListPage = () => {
  
  const users = [
    {id:1, name: 'Mosh'},
    {id:2, name: 'John'},
    {id:3, name: 'Alice'},
  ]

  return (
    <div>
      <h3>UserListPage</h3>
      {users.map(user => (
        <Link to={`/users/${user.id}`} key={user.id}>{user.name}</Link>
      ))}
    </div>
  )
}

export default UserListPage