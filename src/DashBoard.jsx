import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserIcon from './assets/profile.png'

export default function DashBoard() {
  const getData = JSON.parse(localStorage.getItem('UserLogged'))

  return (
    <>
      <div className="container ml-[19.5cm] text-center">
        <NavLink to="/Profile" className="text-center">
          <li className='curser-pointer hover:font-bold transition-none duration-100'><img className='w-7 hover:w-8' src={UserIcon}></img></li>
        </NavLink>
      </div>
      <div className='container font-bold text-center text-white'>
        <p>Welcome {getData.UserName}</p>
        

      </div>
    </>
  )
}
