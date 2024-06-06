/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPrivacyChecked) {
      alert('You must agree to the privacy policy & terms');
      return;
    }
    console.log(state);
  };

  const handlePrivacyChecked = (e) => {
    setIsPrivacyChecked(e.target.checked);
  };

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
          <p className='text-sm mb-3 font-medium'>
            Please register your account
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name Start */}
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                onChange={handleInput}
                value={state.name}
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md'
                type='text'
                name='name'
                placeholder='Name'
                id='name'
                autoComplete='name'
                required
              />
            </div>
            {/* Name End */}
            {/* Email Start */}
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={handleInput}
                value={state.email}
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md'
                type='email'
                name='email'
                placeholder='Email'
                id='email'
                autoComplete='email'
                required
              />
            </div>
            {/* Email End */}
            {/* Password Start */}
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={handleInput}
                value={state.password}
                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md'
                type='password'
                name='password'
                placeholder='Password'
                id='password'
                autoComplete='current-password'
                required
              />
            </div>
            {/* Password End */}
            {/* Privacy Start */}
            <div className='flex item-center w-full gap-3 mb-3'>
              <input
                className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500'
                type='checkbox'
                name='checkbox'
                id='checkbox'
                checked={isPrivacyChecked}
                onChange={handlePrivacyChecked}
              />
              <label htmlFor='checkbox'>
                {' '}
                I agree to privacy policy & terms
              </label>
            </div>
            {/* Privacy End */}

            <button className='bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
              Sign Up
            </button>

            <div className='flex item-center mb-3 gap-3 justify-center'>
              <p>
                Already Have An Account ?{' '}
                <Link
                  className='font-bold'
                  to='/login'
                >
                  Sign In
                </Link>
              </p>
            </div>
            <div>
              <div className='w-full flex justify-center items-center mb-3'>
                {/* This is the line before 'Or' */}
                <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                {/* This is the 'Or' */}
                <div className='w-[10% flex justify-center items-center'>
                  <span className='pb-1'>Or</span>
                </div>
                {/* This is the line after 'Or */}
                <div className='w-[45%] bg-slate-700 h-[1px]'></div>
              </div>
              <div className='flex justify-center items-center gap-3'>
                <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                  <span>
                    <FaGoogle />
                  </span>
                </div>
                <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                  <span>
                    <FaFacebook />
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
