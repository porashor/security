import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import useAuthAll from '../CustomHook/useAuthAll'




const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {LogIn} = useAuthAll()
  return (
    <div>
      <div className='w-[60%] mx-auto py-10 bg-cyan-400 my-10 rounded-xl'>
        <h1 className='text-3xl uppercase font-semibold text-center py-6'>LogIn</h1>
        <form onSubmit={(e)=>LogIn(e, email, password)} className='w-[80%] mx-auto flex flex-col gap-5 text-xl '>
            <input type="email" className='py-1 rounded-md px-3 outline-none' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className='py-1 rounded-md px-3 outline-none' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' className='text-2xl uppercase text-center font-semibold bg-green-500 rounded-md py-1 px-3'>Submit</button>
        </form>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default LogIn
