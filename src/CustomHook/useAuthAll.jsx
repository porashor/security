import React, { useState } from 'react'
import { data, store } from '../Auth/Auth'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { doc, setDoc } from 'firebase/firestore'




const useAuthAll = () => {
    const [mainUser, setMainUser] = useState("")
    async function SignInF(e, email, pass, name) {
        e.preventDefault()
        try{
          //creating user 
          await createUserWithEmailAndPassword(data, email, pass)
          const user = data.currentUser
          //updating profile 
          if(user){
            updateProfile(user, {
              displayName: name
            })
          }
          //after state changing process
          setTimeout(()=>{
            data.onAuthStateChanged((user)=>{
                if(user){
                    console.log(user)
                    setMainUser(user.displayName)
                }
              })
          },5000)
          //uploading in firebase firestore 
          if(store){
            const docRef = doc(store, name, user?.uid)
            setDoc(docRef, {
              name: name,
              email: email
            })
          }
          console.log(user)
          //showing in toast 
          toast.success("reg success", {
            position : "top-center"
          })
        }catch(err){
          console.log(err)
          toast.success("reg failed", {
            position : "bottom-center"
          })
        }
      }
    const Person = data.currentUser?.displayName
  return {mainUser, SignInF}
}

export default useAuthAll
