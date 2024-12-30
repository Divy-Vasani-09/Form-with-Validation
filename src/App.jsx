import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './Registration'
import Login from './Login';
import Navbar from './Navbar'
import DashBoard from './DashBoard';
import Profile from './Profile';
import EditProfile from './EditProfile';
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
      path: "/Registration",
      element: <><Navbar /><Registration /></>
    },
    {
      path: "/Login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/Profile",
      element: <><Navbar /><Profile /></>
    },
    {
      path: "/EditProfile",
      element: <><Navbar /><EditProfile /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
