import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Contant/Nav'
import Home from './Contant/Home'
import LogIn from './Contant/LogIn'
import SignIn from './Contant/SignIn'
import useAuthAll from './CustomHook/useAuthAll'

const App = () => {
  const {mainUser, SignInF} = useAuthAll()
  return (
    <div className='py-6 w-[80%] mx-auto'>
      <Router>
        <Nav user={mainUser}/>
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
