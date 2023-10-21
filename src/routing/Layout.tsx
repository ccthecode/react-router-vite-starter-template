import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <NavBar/>
      <main id='main' className='p-3'>
        <Outlet/> 
        {/* outlet: placeholder for child component */}
      </main>
    </div>
  )
}

export default Layout