import React, { useState } from 'react'

export default function Login() {

  const [inputValues, setInputValues] = useState({
    EmailID: '',
    Password: '',
  })
  const [inputValuesErr, setInputValuesErr] = useState({
    EmailIDErr: false,
    PasswordErr: false,
  })
  const showErrorInBorder = 'border-red-700';
  const unShowErrorInBorder = 'border-slate-950';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  return (
    <div className='container flex flex-col mx-auto my-5 w-1/2 '>
      <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[80vh] items-center text-center shadow-slate-300 drop-shadow shadow-sm'>

        <div className='container email-id'>
          <input
            type="email"
            placeholder="Email Id"
            name='EmailID'
            value={inputValues.EmailID}
            required
            onChange={handleChange}
            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.EmailIDErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.EmailIDErr && <p className='text-red-700'>Your email is invalid</p>}
        </div>

        <div className='container password'>
          <input
            type="text"
            placeholder="Password"
            name='Password'
            value={inputValues.Password}
            maxLength="16"
            onChange={handleChange}
            className={`px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.PasswordErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.PasswordErr && <p className='text-red-700 px-3'>Enter at least one UpperCase, LowerCase, Digit and any Symbol</p>}
        </div>

        <div className='text-center items-center m-3'>
          <button type='submit'
            // onClick={handleValidations}
            className='text-slate-300  font-bold bg-slate-800 hover:bg-slate-700 p-1 px-4 rounded-lg '>Submit </button>
        </div>
      </div>
    </div >
  )
}
