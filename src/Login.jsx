import React, { useRef, useState } from 'react'
import { userNRegex, emailRegex, passRegex } from './Component/Regexes';

export default function Login() {
    const [userName, setUserName] = useState("");
    const userNRef = useRef(null);
    const [userNameErr, setUserNameErr] = useState(false);

    const [email, setEmail] = useState("");
    const emailRef = useRef(null);
    const [emailErr, setEmailErr] = useState(false);

    const [pass, setPass] = useState("");
    const passRef = useRef(null);
    const [passErr, setPassErr] = useState(false);

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

        const handleValidations = () => {
            {
              !fullNRegex.test(fulName) ?
                (setFullNameErr(true), fullNRef.current.classList.replace('border-slate-950', 'border-red-700'))
                :
                (setFullNameErr(false), fullNRef.current.classList.replace('border-red-700', 'border-slate-950'))
            }
        
            if (fullNRegex.test(fulName)) {
        
              {
                !userNRegex.test(userName) ?
                  (setUserNameErr(true), userNRef.current.classList.replace('border-slate-950', 'border-red-700'))
                  :
                  (setUserNameErr(false), userNRef.current.classList.replace('border-red-700', 'border-slate-950'))
              }
        
              if (userNRegex.test(userName)) {
                {
                  !emailRegex.test(email) ?
                    (setEmailErr(true), emailRef.current.classList.replace('border-slate-950', 'border-red-700'))
                    :
                    (setEmailErr(false), emailRef.current.classList.replace('border-red-700', 'border-slate-950'))
                }
        
                if (emailRegex.test(email)) {
                  {
                    !mobileNRegex.test(mobileN) ?
                      (setMobileNErr(true), mobileNRef.current.classList.replace('border-slate-950', 'border-red-700'))
                      :
                      (setMobileNErr(false), mobileNRef.current.classList.replace('border-red-700', 'border-slate-950'))
                  }
        
                  if (mobileNRegex.test(mobileN)) {
                    const optionS = document.getElementById('optionS').value;
                    {
                      country === undefined || country === optionS ?
                        (setCountryErr(true), countryRef.current.classList.replace('border-slate-950', 'border-red-700'))
                        :
                        (setCountryErr(false), countryRef.current.classList.replace('border-red-700', 'border-slate-950'))
                    }
        
        
                    if (country !== undefined && country !== optionS) {
                      {
                        !passRegex.test(pass) ?
                          (setPassErr(true), passRef.current.classList.replace('border-slate-950', 'border-red-700'))
                          :
                          (setPassErr(false), passRef.current.classList.replace('border-red-700', 'border-slate-950'))
                      }
        
                      if (passRegex.test(pass)) {
                        {
                          pwd !== conPass ?
                            (setConPassErr(true), conPassRef.current.classList.replace('border-slate-950', 'border-red-700'))
                            :
                            (setConPassErr(false), conPassRef.current.classList.replace('border-red-700', 'border-slate-950'))
                        }
        
                        // if (pwd == conPass) {
                        //   {
                        //     genderO == null ?
                        //       setGenderOErr(true)
                        //       :
                        //       setGenderOErr(false)
                        //   }
        
                        //   if (genderO !== null) {
                        //     {
                        //       birthDate == '' ?
                        //         (setBirthDateErr(true), birthDateRef.current.classList.replace('border-slate-950', 'border-red-700'))
                        //         :
                        //         (setBirthDateErr(false), birthDateRef.current.classList.replace('border-red-700', 'border-slate-950'))
                        //     }
        
                        //     if (birthDate !== '') {
                        //       setDataV(
                        //       {
                        //         FullName: fulName,
                        //         UName: userName,
                        //         EmailID: email,
                        //         PhoneNo: mobileN,
                        //         CountryName: country,
                        //         Password: pass,
                        //         Gender: genderO,
                        //         BirthDate: birthDate,
                        //       });
                        //       // data
                        //       let getData = JSON.parse(localStorage.getItem("dataV")) || [];
                        //       getData.push(dataV);
                        //       localStorage.setItem('dataV', JSON.stringify(getData));
                        //       console.log(JSON.stringify(getData));
                        //       console.log(dataV);
                        //     }
                        //   }
                        // }
                      }
                    }
        
                  }
                }
              }
            }
        
          }
    return (
        <div className='container flex flex-col mx-auto my-5 w-1/2 '>
            <div className='bg-slate-900 text-white p-9 px-0 rounded-xl min-h-[80vh] items-center text-center shadow-white drop-shadow-2xl'>
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
                    {/* {userNameErr && <p className='text-red-700 text-'>Your user name is invalid</p>} */}
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
                    {/* {emailErr && <p className='text-red-700'>Your email is invalid</p>} */}
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

                <div className='text-center items-center m-3'>
                    <button
                        type='submit'
                        // onClick={handleValidations}
                        className='text-slate-300  font-bold bg-slate-800 hover:bg-slate-700 p-1 px-4 rounded-lg '
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
