/** @format */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';

const AdminLogin = () => {
  const dispatch = useDispatch();

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
    dispatch(admin_login(state));
    // console.log(state);
  };

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
              <img
                className='w-full h-full'
                src='/images/logo.png'
                alt='logo-image'
              />
            </div>
          </div>

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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
