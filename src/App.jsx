import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './Registration'
import Login from './Login';
import Navbar from './Navbar'
import DashBoard from './DashBoard';
// import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><DashBoard /></>, // Default route
    },
    {
      path: "/DashBoard",
      element: <><Navbar /><DashBoard /></>, 
    },
    {
      path: "/Login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/Registration",
      element: <><Navbar /><Registration /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
