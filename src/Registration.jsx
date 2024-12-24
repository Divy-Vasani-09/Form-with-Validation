import React, { useEffect, useState, useRef } from 'react'
import { fullNRegex, userNRegex, emailRegex, mobileNRegex, passRegex } from './Component/Regexes';


export default function Registration() {

  const [fulName, setFullName] = useState("");
  const fullNRef = useRef(null);
  const [fullNameErr, setFullNameErr] = useState(false);

  const [userName, setUserName] = useState("");
  const userNRef = useRef(null);
  const [userNameErr, setUserNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const emailRef = useRef(null);
  const [emailErr, setEmailErr] = useState(false);

  const [mobileN, setMobileN] = useState("");
  const mobileNRef = useRef(null);
  const [mobileNErr, setMobileNErr] = useState(false);

  const [country, setCountry] = useState(undefined);
  const countryRef = useRef(null);
  const [countryErr, setCountryErr] = useState(false);
  const options = [
    "India",
    "China",
    "USA",
    "Canada",
    "Australia",
  ];

  const [pass, setPass] = useState("");
  const passRef = useRef(null);
  const [passErr, setPassErr] = useState(false);

  const [conPass, setConPass] = useState("");
  const conPassRef = useRef(null);
  const [conPassErr, setConPassErr] = useState(false);

  const [genderO, setGenderO] = useState(null);
  const genderORef = useRef(null)
  const [genderOErr, setGenderOErr] = useState(false);

  const [birthDate, setBirthDate] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const birthDateRef = useRef(null)
  const [birthDateErr, setBirthDateErr] = useState(false);

  const handleFNOnChange = (e) => {
    setFullName(e.target.value.replace(/\s{2}/, ' ').replace(/[^A-Za-z\s]/ig, ''))
  }
  const handleFullNBlur = () => {
    if (document.activeElement !== fullNRef.current || fulName == '') {
      {
        !fullNRegex.test(fulName) ?
          (setFullNameErr(true), fullNRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setFullNameErr(false), fullNRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };

  const handleUDOnChange = (e) => {
    setUserName(e.target.value.replace(/\s/g, '').replace(/[^A-Za-z_0-9]/ig, '').replace(/_{2}/g, '_'))
  }
  const handleUserNBlur = () => {
    if (document.activeElement !== userNRef.current || userName == '') {
      // userNRef.current.focus();
      {
        !userNRegex.test(userName) ?
          (setUserNameErr(true), userNRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setUserNameErr(false), userNRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };

  const handleEmlOnChange = (e) => {
    setEmail(e.target.value.replace(/\s/g, '').replace(/[^a-z0-9.@]/ig, '').replace(/@{2}/, '@').replace(/[.]{2}/, '.'))
  }
  const handleEmailNBlur = () => {
    if (document.activeElement !== emailRef.current || email == '') {
      {
        !emailRegex.test(email) ?
          (setEmailErr(true), emailRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setEmailErr(false), emailRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };

  const handleMNOnChange = (e) => {
    setMobileN(e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, ''))
    const MN = e.target.value;
  }
  const handleMobileNBlur = () => {
    if (document.activeElement !== mobileNRef.current || mobileN == '') {
      // mobileNRef.current.focus();
      {
        !mobileNRegex.test(mobileN) ?
          (setMobileNErr(true), mobileNRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setMobileNErr(false), mobileNRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };


  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    console.log("User Selected Value - ", e.target.value);
    const d = e.target.value;
    const optionS = document.getElementById('optionS').value;
    console.log(optionS)
  }
  const handleCountryBlur = () => {
    if (document.activeElement !== countryRef.current || country == '') {
      // countryRef.current.focus();
      {
        country == undefined || country == 'Please choose Country' ?
          (setCountryErr(true), countryRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setCountryErr(false), countryRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };

  const handlePassOnChange = (e) => {
    setPass(e.target.value)
  }
  const pwd = pass;
  const handlePassBlur = () => {
    if (document.activeElement !== passRef.current || pass == '') {
      // passRef.current.focus();
      {
        !passRegex.test(pass) ?
          (setPassErr(true), passRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setPassErr(false), passRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };

  const handleConPassOnChange = (e) => {
    setConPass(e.target.value)
    const cofPass = e.target.value;
  }
  const handleConPassBlur = () => {
    if (document.activeElement !== conPassRef.current || conPass == '') {
      // conPassRef.current.focus();
      {
        pwd !== conPass ?
          (setConPassErr(true), conPassRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setConPassErr(false), conPassRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };

  const handleGenderBlur = ()=> {
      if (document.activeElement !== genderORef.current || genderO == null) {
        // conPassRef.current.focus();
        {
          genderO == null ?
            setGenderOErr(true)
            :
            setGenderOErr(false)
        }
      }
  }

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setBirthDate(newDate);
    if (birthDate) {
      const dateParts = birthDate.split('-');
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
  const handleBirthDateBlur = () => {
    if (document.activeElement !== birthDateRef.current || birthDate == '') {
      // inputRef.current.focus();
      {
        birthDate == '' ?
          (setBirthDateErr(true), birthDateRef.current.classList.replace('border-slate-950', 'border-red-700'))
          :
          (setBirthDateErr(false), birthDateRef.current.classList.replace('border-red-700', 'border-slate-950'))
      }
    }
  };

  const handleValidations = () => {
    if(!fullNRegex.test(fulName)){
      setFullNameErr(true)
      , fullNRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }
    if(!userNRegex.test(userName)){
      setUserNameErr(true)
      , userNRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }
    if(!emailRegex.test(email)){
      setEmailErr(true)
      , emailRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }
    if(!mobileNRegex.test(mobileN)){
      setMobileNErr(true)
      , mobileNRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }
    const optionS = document.getElementById('optionS').value;
    if(country === undefined || country === optionS){
      setCountryErr(true)
      , countryRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }
    if(!passRegex.test(pass)){
      setPassErr(true)
      , passRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }
    if(pwd !== conPass){
      setConPassErr(true)
      , conPassRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }
    if(genderO == null){
      setGenderOErr(true)
      return
    }
    if(birthDate == ''){
      setBirthDateErr(true)
      , birthDateRef.current.classList.replace('border-slate-950', 'border-red-700')
      return
    }

     const dataV =
      {
        FullName: fulName,
        UName: userName,
        EmailID: email,
        PhoneNo: mobileN,
        CountryName: country,
        Password: pass,
        Gender: genderO,
        BirthDate: birthDate,
      };
    let getData = JSON.parse(localStorage.getItem("dataV")) || [];
    getData.push(dataV);
    localStorage.setItem('dataV', JSON.stringify(getData));
    console.log(JSON.stringify(getData));
    console.log(dataV);
  }


  return (
    <div className='container flex flex-col mx-auto my-5 w-1/2 '>
      <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[80vh] items-center text-center shadow-white drop-shadow-2xl'>

        <div className='container full-name'>
          <input
            type="text"
            placeholder="Full Name"
            value={fulName}
            ref={fullNRef}
            required
            onChange={handleFNOnChange}
            onBlur={handleFullNBlur}
            className='p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid border-slate-950 rounded-lg bg-slate-950'
          />
          {fullNameErr && <p className='text-red-700 text-'>Your user name is invalid</p>}
        </div>

        <div className='container user-name'>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            ref={userNRef}
            required
            onChange={handleUDOnChange}
            onBlur={handleUserNBlur}
            className='p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid border-slate-950 rounded-lg bg-slate-950'
          />
          {userNameErr && <p className='text-red-700 text-'>Your user name is invalid</p>}
        </div>

        <div className='container email-id'>
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            ref={emailRef}
            required
            onChange={handleEmlOnChange}
            onBlur={handleEmailNBlur}
            className='p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid border-slate-950 rounded-lg bg-slate-950'
          />
          {emailErr && <p className='text-red-700'>Your email is invalid</p>}
        </div>

        <div className='container mobile-No'>
          <input
            type="text"
            placeholder="Phone No."
            value={mobileN}
            ref={mobileNRef}
            maxLength="10"
            required
            onChange={handleMNOnChange}
            onBlur={handleMobileNBlur}
            className='p-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid border-slate-950 rounded-lg bg-slate-950'
          />
          {mobileNErr && <p className='text-red-700'>Your Phone No. is invalid </p>}
        </div>

        <div className=" country-section  text-center ">
          <select
            ref={countryRef}
            required
            onChange={handleCountryChange}
            onBlur={handleCountryBlur}
            className='p-1 py-1 my-1 w-3/4 text-base  text-slate-400 border-2 border-solid border-slate-950 rounded-lg bg-slate-950 cursor-pointer'
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
          {countryErr && <p className='text-red-700 text-center'>Select Your Country </p>}
        </div>

        <div className='container password'>
          <input
            type="text"
            placeholder="Password"
            value={pass}
            ref={passRef}
            maxLength="16"
            onChange={handlePassOnChange}
            onBlur={handlePassBlur}
            className='px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid border-slate-950 rounded-lg bg-slate-950'
          />
          {passErr && <p className='text-red-700 px-3'>Enter at least one UpperCase, LowerCase, Digit and any Symbol</p>}
        </div>

        <div className='container confirm-password'>
          <input
            type="text"
            placeholder="Confirm Password"
            value={conPass}
            ref={conPassRef}
            onChange={handleConPassOnChange}
            onBlur={handleConPassBlur}
            className='px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid border-slate-950 rounded-lg bg-slate-950'
          />
          {conPassErr && <p className='text-red-700'>Enter same password</p>}
        </div>

        <div className="container gender  px-2 py-0 my-1">
          <div className='flex justify-center space-x-2 text-slate-400' onBlur={handleGenderBlur}>
            <h5 className='font-bold '>Gender:</h5>
            <label className='cursor-pointer flex '>
              <input type="radio" name="myRadio" id='gender' value="male" className='cursor-pointer text-slate-800' onClick={() => setGenderO('male')} />
              <p className='px-1'>Male</p>
            </label>
            <label className='cursor-pointer flex'>
              <input type="radio" name="myRadio" id='gender' value="female" className='cursor-pointer' onClick={() => setGenderO('female')} />
              <p className='px-1'>Female</p>
            </label>
            <label className='cursor-pointer flex'>
              <input type="radio" name="myRadio" id='gender' value="other" className='cursor-pointer' onClick={() => setGenderO('other')} />
              <p className='px-1'>Other</p>
            </label>
          </div>
          {genderOErr && <p className='text-red-700 '>Select Your Gender</p>}
        </div>

        <div className="container birth-date">
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={birthDate}
            ref={birthDateRef}
            onChange={handleDateChange}
            onBlur={handleBirthDateBlur}
            className='px-2 py-1 mx-5 my-1 w-3/4 border-2 border-solid text-slate-400 border-slate-950 rounded-lg bg-slate-950 cursor-pointer'
          />
          {birthDateErr && <p className='text-red-700 '>Select Your Birth Date</p>}
        </div>


        <div className='text-center items-center m-3'>
          <button type='submit' onClick={handleValidations} className='text-slate-300  font-bold bg-slate-800 hover:bg-slate-700 p-1 px-4 rounded-lg '>Submit </button>
        </div>
      </div>
    </div >
  )
}
