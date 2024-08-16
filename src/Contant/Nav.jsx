import React from 'react'
import { Link } from 'react-router-dom'




const Nav = ({user}) => {
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
    console.log(user)
  return (
    <div className='flex py-2 px-3 text-xl gap-4 font-semibold'>
      {nav.map((item, index)=>(
        <div key={index}>
            <a href={item.link} className='bg-red-400 px-3 py-2 rounded-lg'>{item.name}</a>
        </div>
      ))}
      <h1>{user}</h1>
    </div>
  )
}

export default Nav
