import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  const getData = JSON.parse(localStorage.getItem('UserLogged'))
  return (
    <div className='container flex flex-col mx-auto my-5 w-1/2 '>
      <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[80vh] items-center text-center shadow-slate-300 drop-shadow shadow-sm'>

        <div className='container text-white text-center  '>
          <div className='container text-center text-white '>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'> Welcome &nbsp;</p><p> {getData.FullName}</p></div>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'>UserName :&nbsp;</p><p> {getData.UserName}</p></div>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'>Email ID :&nbsp;</p><p> {getData.EmailID}</p></div>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'>Gender :&nbsp;</p><p> {getData.Gender}</p></div>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'>Birth Date :&nbsp;</p><p> {getData.BirthDate}</p></div>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'>CountryName :&nbsp;</p><p> {getData.CountryName}</p></div>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'>Phone No.:&nbsp;</p><p> {getData.PhoneNo}</p></div>
            <div className="container flex flex-nowrap justify-center"><p className='font-bold'>Password :&nbsp;</p><p> {getData.Password}</p></div>
            <div className="container"> 
              <button
                className='text-slate-200 text-lg font-bold bg-blue-800 hover:bg-blue-900 p-1 px-5 m-3 rounded-lg '
              >
                <Link to="/EditProfile">
                  Edit
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
