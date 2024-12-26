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
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const showErrorInBorder = 'border-red-700';
  const unShowErrorInBorder = 'border-slate-950';


  const handleFNOnChange = (e) => {
    setInputValues(inV => ({ ...inV, FullName: e.target.value.replace(/\s{2}/, ' ').replace(/[^A-Za-z\s]/ig, '') }))
  }

  const handleUDOnChange = (e) => {
    setInputValues(inV => ({ ...inV, UserName: e.target.value.replace(/\s/g, '').replace(/[^A-Za-z_0-9]/ig, '').replace(/_{2}/g, '_') }))
  }

  const handleEmlOnChange = (e) => {
    setInputValues(inV => ({ ...inV, EmailID: e.target.value.replace(/\s/g, '').replace(/[^a-z0-9.@]/ig, '').replace(/@{2}/, '@').replace(/[.]{2}/, '.') }))
  }

  const handleMNOnChange = (e) => {
    setInputValues(inV => ({...inV, PhoneNo: e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, '')}))
  }


  const handleCountryChange = (e) => {
    setInputValues(inV => ({...inV, CountryName: e.target.value}))
    const optionS = document.getElementById('optionS').value;
    console.log(optionS)
  }

  const handlePassOnChange = (e) => {
    setInputValues(inV=> ({...inV, Password: e.target.value}))
  }
  const pwd = inputValues.Password;

  const handleConPassOnChange = (e) => {
    setInputValues(inV=>({...inV, ConfirmPassword: e.target.value}))
  }

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setInputValues(inV =>({...inV, BirthDate: newDate}))
    if (inputValues.BirthDate) {
      const dateParts = inputValues.BirthDate.split('-');
      const yearValue = dateParts[0];
      const monthValue = dateParts[1];
      const dayValue = dateParts[2];

      setYear(yearValue);
      setMonth(monthValue);
      setDay(dayValue);
    } else {
      setYear('');
      setMonth('');
      setDay('');
    }
  }

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
      setInputValuesErr({PhoneNoErr: true})
      return
    }
    const optionS = document.getElementById('optionS').value;
    if (inputValues.CountryName === '' || inputValues.CountryName === optionS) {
      setInputValuesErr({CountryNameErr: true})
      return
    }
    if (!passRegex.test(inputValues.Password)) {
      setInputValuesErr({PasswordErr: true})
      return
    }
    if (pwd !== inputValues.ConfirmPassword) {
      setInputValuesErr({ConfirmPasswordErr: true})
      return
    }
    if (inputValues.Gender == '') {
      setInputValuesErr({GenderErr: true})
      return
    }
    if (inputValues.BirthDate == '') {
      setInputValuesErr({BirthDateErr: true})
      return
    }
    else{
      const dataV =
      {
        FullName: inputValues.FullName,
        UName: inputValues.UserName,
        EmailID: inputValues.EmailID,
        PhoneNo: inputValues.PhoneNo,
        CountryName: inputValues.CountryName,
        Password: inputValues.Password,
        Gender: inputValues.Gender,
        BirthDate: inputValues.BirthDate,
      };
      let getData = JSON.parse(localStorage.getItem("dataV")) || [];
      getData.push(dataV);
      localStorage.setItem('dataV', JSON.stringify(getData));
      console.log(JSON.stringify(getData));
      console.log(dataV);
    }
  }

  return (
    <div className='container flex flex-col mx-auto my-5 w-1/2 '>
      <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[80vh] items-center text-center shadow-slate-300 drop-shadow shadow-sm'>

        <div className='container full-name'>
          <input
            type="text"
            placeholder="Full Name"
            value={inputValues.FullName}
            required
            onChange={handleFNOnChange}
            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.FullNameErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.FullNameErr && <p className='text-red-700'>Your user name is invalid</p>}
        </div>

        <div className='container user-name'>
          <input
            type="text"
            placeholder="User Name"
            value={inputValues.UserName}
            required
            onChange={handleUDOnChange}
            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.UserNameErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.UserNameErr && <p className='text-red-700 text-'>Your user name is invalid</p>}
        </div>

        <div className='container email-id'>
          <input
            type="email"
            placeholder="Email Id"
            value={inputValues.EmailID}
            required
            onChange={handleEmlOnChange}

            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.EmailIDErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.EmailIDErr && <p className='text-red-700'>Your email is invalid</p>}
        </div>

        <div className='container mobile-No'>
          <input
            type="text"
            placeholder="Phone No."
            value={inputValues.PhoneNo}
            maxLength="10"
            required
            onChange={handleMNOnChange}
            className={`p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.PhoneNoErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.PhoneNoErr && <p className='text-red-700'>Your Phone No. is invalid </p>}
        </div>

        <div className=" country-section  text-center ">
          <select
            required
            onChange={handleCountryChange}
            className={`p-1 py-1 my-1 w-3/4 text-base  text-slate-400 border-2 border-solid ${inputValuesErr.CountryNameErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950 cursor-pointer`}
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
            value={inputValues.Password}
            maxLength="16"
            onChange={handlePassOnChange}
            className={`px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.PasswordErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.PasswordErr && <p className='text-red-700 px-3'>Enter at least one UpperCase, LowerCase, Digit and any Symbol</p>}
        </div>

        <div className='container confirm-password'>
          <input
            type="text"
            placeholder="Confirm Password"
            value={inputValues.ConfirmPassword}
            onChange={handleConPassOnChange}
            className={`px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid ${inputValuesErr.ConfirmPasswordErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950`}
          />
          {inputValuesErr.ConfirmPasswordErr && <p className='text-red-700'>Enter same password</p>}
        </div>

        <div className="container gender  px-2 py-0 my-1">
          <div className='flex justify-center space-x-2 text-slate-400' >
            <h5 className='font-bold '>Gender:</h5>
            <label className='cursor-pointer flex '>
              <input type="radio" name="myRadio" id='gender' value="male" className='cursor-pointer text-slate-800' onClick={() => setInputValues(inV=>({...inV,Gender:'male'}))} />
              <p className='px-1'>Male</p>
            </label>
            <label className='cursor-pointer flex'>
              <input type="radio" name="myRadio" id='gender' value="female" className='cursor-pointer' onClick={() => setInputValues(inV=>({...inV,Gender:'female'}))} />
              <p className='px-1'>Female</p>
            </label>
            <label className='cursor-pointer flex'>
              <input type="radio" name="myRadio" id='gender' value="other" className='cursor-pointer' onClick={() => setInputValues(inV=>({...inV,Gender:'other'}))} />
              <p className='px-1'>Other</p>
            </label>
          </div>
          {inputValuesErr.GenderErr && <p className='text-red-700 '>Select Your Gender</p>}
        </div>

        <div className="container birth-date">
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={inputValues.BirthDate}
            onChange={handleDateChange}
            className={`px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid text-slate-400 ${inputValuesErr.BirthDateErr === true ? showErrorInBorder : unShowErrorInBorder} rounded-lg bg-slate-950 cursor-pointer`}
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
