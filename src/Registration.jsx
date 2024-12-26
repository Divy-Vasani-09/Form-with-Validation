import React, { useEffect, useState, useRef } from 'react'
import { fullNRegex, userNRegex, emailRegex, mobileNRegex, passRegex } from './Component/Regexes';


export default function Registration() {

  const [inputValues, setInputValues] = useState({
    FullName: '',
    UserName: '',
    EmailID: '',
    PhoneNo: '',
    CountryName: '',
    Password: '',
    ConfirmPassword: '',
    Gender: '',
    BirthDate: ''
  })
  const [inputValuesErr, setInputValuesErr] = useState({
    FullNameErr: false,
    UserNameErr: false,
    EmailIDErr: false,
    PhoneNoErr: false,
    CountryNameErr: false,
    PasswordErr: false,
    ConfirmPasswordErr: false,
    GenderErr: false,
    BirthDateErr: false
  })
  const options = [
    "India",
    "China",
    "USA",
    "Canada",
    "Australia",
  ];

  const showErrorInBorder = 'border-red-700';
  const unShowErrorInBorder = 'border-slate-950';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };
  const pwd = inputValues.Password;

  const handleValidations = () => {
    if (!fullNRegex.test(inputValues.FullName)) {
      setInputValuesErr({ FullNameErr: true })
      return
    }
    if (!userNRegex.test(inputValues.UserName)) {
      setInputValuesErr({ UserNameErr: true })
      return
    }
    if (!emailRegex.test(inputValues.EmailID)) {
      setInputValuesErr({ EmailIDErr: true })
      return
    }
    if (!mobileNRegex.test(inputValues.PhoneNo)) {
      setInputValuesErr({ PhoneNoErr: true })
      return
    }
    const optionS = document.getElementById('optionS').value;
    if (inputValues.CountryName === '' || inputValues.CountryName === optionS) {
      setInputValuesErr({ CountryNameErr: true })
      return
    }
    if (!passRegex.test(inputValues.Password)) {
      setInputValuesErr({ PasswordErr: true })
      return
    }
    if (pwd !== inputValues.ConfirmPassword) {
      setInputValuesErr({ ConfirmPasswordErr: true })
      return
    }
    if (inputValues.Gender == '') {
      setInputValuesErr({ GenderErr: true })
      return
    }
    if (inputValues.BirthDate == '') {
      setInputValuesErr({ BirthDateErr: true })
      return
    }
    else {
      setInputValuesErr({ BirthDateErr: false })

      let getData = JSON.parse(localStorage.getItem("inputValues")) || [];
      getData.push(inputValues);
      localStorage.setItem('inputValues', JSON.stringify(getData));
      console.log(JSON.stringify(getData));
      console.log(inputValues);
    }
  }

  return (
    <div className='container flex flex-col mx-auto my-5 w-1/2 '>
      <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[80vh] items-center text-center shadow-slate-300 drop-shadow shadow-sm'>

        <div className='container full-name'>
          <input
            type="text"
            placeholder="Full Name"
            name='FullName'
            value={inputValues.FullName}
            required
            onChange={handleChange}
            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.FullNameErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.FullNameErr && <p className='text-red-700'>Your user name is invalid</p>}
        </div>

        <div className='container user-name'>
          <input
            type="text"
            placeholder="User Name"
            name='UserName'
            value={inputValues.UserName}
            required
            onChange={handleChange}
            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.UserNameErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.UserNameErr && <p className='text-red-700 text-'>Your user name is invalid</p>}
        </div>

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

        <div className='container mobile-No'>
          <input
            type="text"
            placeholder="Phone No."
            name='PhoneNo'
            value={inputValues.PhoneNo}
            maxLength="10"
            required
            onChange={handleChange}
            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.PhoneNoErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.PhoneNoErr && <p className='text-red-700'>Your Phone No. is invalid </p>}
        </div>

        <div className=" country-section  text-center ">
          <select
            required
            name='CountryName'
            onChange={handleChange}
            className={`p-1 py-1 my-1 w-3/4 text-base  text-slate-400 border-2 border-solid ${inputValuesErr.CountryNameErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950 cursor-pointer`}
          >
            <option id='optionS'>Please choose Country</option>
            {options.map((option, index) => {
              return (
                <option key={index}>
                  {option}
                </option>
              );
            })}
          </select>
          {inputValuesErr.CountryNameErr && <p className='text-red-700 text-center'>Select Your Country </p>}
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

        <div className='container confirm-password'>
          <input
            type="text"
            placeholder="Confirm Password"
            name='ConfirmPassword'
            value={inputValues.ConfirmPassword}
            onChange={handleChange}
            className={`px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.ConfirmPasswordErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.ConfirmPasswordErr && <p className='text-red-700'>Enter same password</p>}
        </div>

        <div className="container Gender  px-2 py-0 my-1">
          <div className='flex justify-center space-x-2 text-slate-400' >
            <h5 className='font-bold '>Gender:</h5>
            <label className='cursor-pointer flex '>
              <input type="radio" name="Gender" id='gender' value="male" className='cursor-pointer text-slate-800' checked={inputValues.Gender === "male"} onChange={handleChange} />
              <p className='px-1'>Male</p>
            </label>
            <label className='cursor-pointer flex'>
              <input type="radio" name="Gender" id='gender' value="female" className='cursor-pointer' checked={inputValues.Gender === "female"} onChange={handleChange} />
              <p className='px-1'>Female</p>
            </label>
            <label className='cursor-pointer flex'>
              <input type="radio" name="Gender" id='gender' value="other" className='cursor-pointer' checked={inputValues.Gender === "other"} onChange={handleChange} />
              <p className='px-1'>Other</p>
            </label>
          </div>
          {inputValuesErr.GenderErr && <p className='text-red-700 '>Select Your Gender</p>}
        </div>

        <div className="container birth-date">
          <input
            type="date"
            id="birthDate"
            name="BirthDate"
            value={inputValues.BirthDate}
            onChange={handleChange}
            className={`px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid text-slate-400 ${inputValuesErr.BirthDateErr ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950 cursor-pointer`}
          />
          {inputValuesErr.BirthDateErr && <p className='text-red-700 '>Select Your Birth Date</p>}
        </div>

        <div className='text-center items-center m-3'>
          <button type='submit' onClick={handleValidations} className='text-slate-300  font-bold bg-slate-800 hover:bg-slate-700 p-1 px-4 rounded-lg '>Submit </button>
        </div>
      </div>
    </div >
  )
}