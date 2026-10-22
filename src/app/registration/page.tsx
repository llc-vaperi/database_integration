"use client";

import {useRef} from 'react';
import axios from 'axios';


export default function page() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  
  
  
  function handleRegister() {
      console.log(usernameRef.current?.value, emailRef.current?.value, passwordRef.current?.value);
        axios.post('/api/registration', {
          username: usernameRef.current?.value,
          email: emailRef.current?.value,
          password: passwordRef.current?.value
        });
  }
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    <div className='flex flex-col gap-4'>
        <input ref={usernameRef} className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Username" />
        <input ref={emailRef} className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" placeholder="Email" />
        <input ref={passwordRef} className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" placeholder="Password" />
        <button onClick={handleRegister} className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>register</button>
    </div>
    </div>
  )
}

