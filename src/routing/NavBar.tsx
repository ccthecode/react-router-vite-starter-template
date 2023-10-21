import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className="p-4 flex justify-between gap-4 bg-slate-200 py-3">
      <Link className="font-bold no-underline text-slate-700 text-2xl" to="/">MyApp</Link>
      <div className="flex gap-4">
        <Link className="no-underline text-slate-700 text-lg" to="/users">Users</Link>
        <Link className="no-underline text-slate-700 text-lg" to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar