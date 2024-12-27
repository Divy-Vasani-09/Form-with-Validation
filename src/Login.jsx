import React, { useState } from 'react'
import { emailRegex, passRegex } from './Component/Regexes';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    EmailID: '',
    Password: ''
  })
  const [inputValuesErr, setInputValuesErr] = useState({
    EmailIDErr: false,
    EmailIDExistErr: false,
    PasswordErr: false,
    PasswordExistErr: false,
  })
  const showErrorInBorder = 'border-red-700';
  const unShowErrorInBorder = 'border-slate-950';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValuesErr((e) => ({ ...e, [name + 'Err']: false }))
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  const handleValidations = () => {
    if (inputValues.EmailID.length == 0 || !emailRegex.test(inputValues.EmailID)) {
      setInputValuesErr((e) => ({ ...e, EmailIDErr: true }))
      return
    }

    let getData = JSON.parse(localStorage.getItem("inputValues"))
    const emailIDVerify = getData.map(e => e.EmailID)
    const passwordVerify = getData.map(e => e.Password)

    let findData = getData.find((e) => inputValues.EmailID == e.EmailID)
    localStorage.setItem('UserLogged', JSON.stringify(findData))

    if (!emailIDVerify.includes(inputValues.EmailID)) {
      setInputValuesErr((e) => ({ ...e, EmailIDExistErr: true }))
      return
    }
    if (!passRegex.test(inputValues.Password)) {
      setInputValuesErr((e) => ({ ...e, PasswordErr: true }))
      return
    }
    if (!passwordVerify.includes(inputValues.Password)) {
      setInputValuesErr((e) => ({ ...e, PasswordExistErr: true }))
      return
    }
    navigate("/");
  }

  return (
    <div className='container flex flex-col mx-auto my-5 w-1/2 '>
      <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[50vh] items-center text-center shadow-slate-300 drop-shadow shadow-sm'>
        <div className="container text-center items-center font-bold text-lg p-2 m-3 ml-0 mt-0">Login form</div>

        <div className='container email-id'>
          <input
            type="email"
            placeholder="Email Id"
            name='EmailID'
            value={inputValues.EmailID}
            required
            onChange={handleChange}
            className={`p-2 py-1 mx-5 my-2 w-3/4 border-2 border-solid ${inputValuesErr.EmailIDErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.EmailIDErr && <p className='text-red-700'>{inputValues.EmailID.length == 0 ? "Please Enter Email id" : "Your email is invalid"}</p>}
          {inputValuesErr.EmailIDExistErr && <p className='text-red-700'>Email is not existed</p>}
          {console.log(inputValuesErr.EmailIDExistErr)}
        </div>

        <div className='container password'>
          <input
            type="text"
            placeholder="Password"
            name='Password'
            value={inputValues.Password}
            maxLength="16"
            onChange={handleChange}
            className={`px-2 py-1 mx-5 my-2 w-3/4 border-2 border-solid ${inputValuesErr.PasswordErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.PasswordErr && <p className='text-red-700 px-3'>{inputValues.Password.length == 0 ? "Please Enter Password" : "Enter Your valid password"}</p>}
          {inputValuesErr.PasswordExistErr && <p className='text-red-700 px-3'>Wrong Password</p>}
        </div>

        <div className='text-center items-center m-3'>
          <button type='submit'
            onClick={handleValidations}
            className='text-slate-300  font-bold bg-slate-800 hover:bg-slate-700 p-1 px-4 rounded-lg '>Submit </button>
        </div>
      </div>
    </div >
  )
}