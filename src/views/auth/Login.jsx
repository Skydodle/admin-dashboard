/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <h2 className='text-xl mb-3 font-bold'>Welcome to Ecommerce</h2>
          <p className='text-sm mb-3 font-medium'>
            Please sign in to access your account
          </p>

          <form onSubmit={handleSubmit}>
            {/*  Email Start*/}
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
            {/* Password start */}
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
            <button className='bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
              Sign In
            </button>

            <div className='flex item-center mb-3 gap-3 justify-center'>
              <p>
                Don&apos;t Have An Account ?{' '}
                <Link
                  className='font-bold'
                  to='/register'
                >
                  Sign Up
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

export default Login;
