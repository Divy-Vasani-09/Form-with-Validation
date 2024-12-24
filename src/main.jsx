import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar'
import Registration from './Registration'
import Login from './Login';
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
    {
      path: "/Login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/Registration",
      element: <><Navbar /><Registration /></>
    },
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
