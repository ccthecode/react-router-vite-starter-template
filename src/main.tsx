import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routing/routes.tsx'
import { RouterProvider } from 'react-router-dom'
// Bootstrap
// import './scss/styles.scss'
// import * as bootstrap from 'bootstrap'
// import Alert from 'bootstrap/js/dist/alert';
// // or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)