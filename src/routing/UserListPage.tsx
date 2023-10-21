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
      <ul>
      {users.map(user => (
        <li className="list-item">
        <Link to={`/users/${user.id}`} key={user.id}>{user.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default UserListPage