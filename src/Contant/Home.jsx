import React, { useEffect, useState } from 'react'
import { AppData, store } from '../Auth/Auth'
import { collection, doc, getDoc } from 'firebase/firestore'
import useAuthAll from '../CustomHook/useAuthAll'
import {toast, ToastContainer} from "react-toastify"
 
const Home = () => {
  const [Person, setPerson] = useState("")
  async function HomeData() {
    AppData.onAuthStateChanged(async(user)=>{
      const docRef = doc(store, user?.displayName, user?.uid)
          const docSnap = await getDoc(docRef)
          if(docSnap){
            setPerson(docSnap.data())
            toast.success("successfully user founded",{
              position: "top-right"
            })
          }else{
            toast.success("no user found",{
              position: "bottom-right"
            })
          }
    })
  }
  useEffect(()=>{
    HomeData()
  },[])
  const {signout} = useAuthAll()
  return (
    <div>
      {Person ? <div>
        <div className='w-[40%] mx-auto py-10 px-5 bg-slate-200 my-10 rounded-lg'>
          <h1 className='text-2xl font-semibold text-center py2'>Welcome {Person.name} :)</h1>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-between py-1 text-xl '>
              <p>Name:</p>
              <p>{Person.name}</p>
            </div>
            <div className='flex justify-between py-1 text-xl '>
              <p>Email:</p>
              <p>{Person.email}</p>
            </div>
          </div>
          <button className='text-xl py-2 bg-green-300 w-full rounded-md mt-2 uppercase' onClick={signout}>SignOut</button>
        </div>
        </div> : <p>loading...</p> }
        <ToastContainer/>
    </div>
  )
}

export default Home
