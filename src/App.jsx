import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Contant/Nav'
import Home from './Contant/Home'
import LogIn from './Contant/LogIn'
import SignIn from './Contant/SignIn'
import useAuthAll from './CustomHook/useAuthAll'
import { AppData } from './Auth/Auth'

const App = () => {
  const { SignInF} = useAuthAll()
  const [qcdata, setQcdata] =useState("")
  useEffect(()=>{
    AppData.onAuthStateChanged(user=>{
      setQcdata(user)
    })
  },[])
  console.log(qcdata)
  return (
    <div className='py-6 w-[80%] mx-auto'>
      <Router>
        <Nav client={qcdata}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='login' element={<LogIn/>}></Route>
          <Route path='signin' element={<SignIn Sing={SignInF}/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
