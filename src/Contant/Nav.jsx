import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import useAuthAll from '../CustomHook/useAuthAll'




const Nav = ({client}) => {
  const {signout} = useAuthAll()
    const nav = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "SignIn",
            link: "signin"
        },
        {
            name: "LogIn",
            link: "login"
        },
    ]
  return (
    <div className='flex py-2 px-3 text-xl gap-4 font-semibold'>
      {nav.map((item, index)=>(
        <div key={index}>
            <a href={item.link} className='bg-red-400 px-3 py-2 rounded-lg'>{item.name}</a>
        </div>
      ))}
      <button className='bg-red-400 px-3 py-2 rounded-lg' onClick={signout}>SingOut</button>
      <div>{client ? client.currentUser?.displayName : "no-user"}</div>
      <ToastContainer/>
    </div>
  )
}

export default Nav
