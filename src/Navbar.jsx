import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='flex justify-between bg-slate-900 text-white py-3'>
                <div className="logo">
                    <span className='font-bold text-xl mx-9'>iTask</span>
                </div>
                <ul className="flex gap-8 mx-9">
                    <NavLink className={(e) => {return e.isActive?"font-bold":""}} to="/DashBoard">
                        <li className='curser-pointer hover:font-bold transition-none duration-100'>DashBoard</li>
                    </NavLink>
                    <NavLink className={(e) => {return e.isActive?"font-bold":""}} to="/Login">
                        <li className='curser-pointer hover:font-bold transition-none duration-100'>Login</li>
                    </NavLink>
                    <NavLink className={(e) => {return e.isActive?"font-bold":""}} to="/Registration">
                        <li className='curser-pointer hover:font-bold transition-none duration-100'>Sign UP</li>
                    </NavLink>
                </ul>

            </nav>
        </div>
    )
}
