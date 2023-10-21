import { Link } from "react-router-dom"

const UserListPage = () => {
  
  const users = [
    {id:1, name: 'Mosh'},
    {id:2, name: 'John'},
    {id:3, name: 'Alice'},
  ]

  console.log(users[0])

  return (
    <div className="max-w-xl">
      <h3>UserListPage</h3>
      <ul className="list-group m-4">
      {users.map(user => (
        <li  key={user.id} className="list-group-item">
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default UserListPage