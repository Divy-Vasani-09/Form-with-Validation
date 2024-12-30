import React, { useState } from 'react'
import Profile from './Profile'
import { NavLink } from 'react-router-dom'
import UserIcon from './assets/profile.png'

export default function DashBoard() {
  const getData = JSON.parse(localStorage.getItem('UserLogged'))

  const [fullName, setFullName] = useState('')
  const handleChange = (e) => {
    setFullName(e.target.value)
  };

  const handleValidations = () => {
    console.log(fullName)
    updateFullName(getData.FullName, fullName)
  }

  function updateFullName(FullName, fullName) {
    if (getData.FullName == FullName) {
      getData.FullName = fullName;
    }
    console.log(getData.FullName)
    localStorage.setItem("UserLogged", JSON.stringify(getData))
  }

  return (
    <>
      <div className="container ml-[19.5cm] text-center">
        <NavLink to="/Profile" className="text-center">
          <li className='curser-pointer hover:font-bold transition-none duration-100'><img className='w-7 hover:w-8' src={UserIcon}></img></li>
        </NavLink>
      </div>
      <div className='container font-bold text-center text-white'>
        <p>Welcome {getData.FullName}</p>
        {/* <div className='container flex flex-col mx-auto my-5 w-1/2 '>
          <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[80vh] items-center text-center shadow-slate-300 drop-shadow shadow-sm'>

            <div className='container full-name'>
              <input
                type="text"
                placeholder="Full Name"
                name='FullName'
                value={fullName}
                required
                onChange={handleChange}
                className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid 
                  rounded-lg bg-slate-950`}
              />
            </div>
            <div className='text-center items-center m-3'>
              <button type='submit'
                onClick={handleValidations}
                className='text-slate-300  font-bold bg-slate-800 hover:bg-slate-700 p-1 px-4 rounded-lg '>Submit </button>
            </div>
          </div>
        </div> */}


      </div>
    </>
  )
}
