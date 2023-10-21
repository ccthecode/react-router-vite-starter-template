import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <nav className="flex gap-4">
      <Link className="underline" to="/users">Users</Link>
      <Link className="underline" to="/contact">Contact</Link>
      </nav>
      
      <div>
        <h1>HomePage</h1>
      </div>
    </>
  )
}

export default HomePage