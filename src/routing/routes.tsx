import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";
import ContactPage from "./ContactPage";
import UsersPage from "./UsersPage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <HomePage/> },
      { 
        path: 'users', 
        element: <UsersPage/>,
        children: [
          { path: ':id', element: <UserDetail/> },
        ]
      }, 
      
      { path: 'contact', element: <ContactPage/> },
    ],
  },
])

// path should only have / when it is not nested in children

export default router; 