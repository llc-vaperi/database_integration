"use client"
import { useRef } from "react";
import axios from "axios";

export default function Home() {
  const username=useRef(null)
  const password=useRef(null)
  
  async function register(){
    axios.post('/api/registration', {
      username: username.current?.value,
      password: password.current?.value,
    }).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  return (  
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex gap-2">
          <input type="text" placeholder="username" ref={username}/>
          <input type="password" placeholder="password" ref={password}/>
          <button onClick={register}>Register</button>
        </div>
      </main>
    </div>
  );
}
