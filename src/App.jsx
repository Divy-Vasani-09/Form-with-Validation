import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './Registration'
import Login from './Login';
import Navbar from './Navbar'
// import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <><Navbar /><Login /></>,
    },
    {
      path: "/Registration",
      element: <><Navbar /><Registration /></>,
    },
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
      {/* <Registration /> */}

    </>
  )
}

export default App
