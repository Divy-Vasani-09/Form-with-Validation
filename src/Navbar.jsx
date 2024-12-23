import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='flex justify-between bg-slate-900 text-white py-3'>
                <div className="logo">
                    <span className='font-bold text-xl mx-9'>iTask</span>
                </div>
                <ul className="flex gap-8 mx-9">
                    <Link to="/home">
                        <li className='curser-pointer hover:font-bold transition-none duration-100'>Home</li>
                    </Link>
                    <Link to="/login">
                        <li className='curser-pointer hover:font-bold transition-none duration-100'>Login</li>
                    </Link>
                    <Link to="/Registration">
                        <li className='curser-pointer hover:font-bold transition-none duration-100'>Sign UP</li>
                    </Link>
                </ul>

            </nav>
        </div>
    )
}
