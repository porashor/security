import React, { useEffect, useState } from 'react'
import { AppData, store } from '../Auth/Auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { doc, getDoc, setDoc } from 'firebase/firestore'




const useAuthAll = () => {

    //function for create a new user 
    async function SignInF(e, email, pass, name) {
        e.preventDefault()
        try{
          //creating user 
          await createUserWithEmailAndPassword(AppData, email, pass)
          const user = AppData.currentUser
          //redirecting to home 
          window.location.href="/"
          //updating profile 
          if(user){
            updateProfile(user, {
              displayName: name
            })
          }
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




      //this function for user loged in 
    async function LogIn(e, email, pass) {
        e.preventDefault()
        try{
          //loging in user 
          await signInWithEmailAndPassword(AppData, email, pass)
          //redirecting to home 
          window.location.href="/"
          //showing in toast 
          toast.success("Login success", {
            position : "top-center"
          })
        }catch(err){
          console.log(err)
          toast.success("Login failed", {
            position : "bottom-center"
          })
        }
      }



      // this function for user loged out 
      async function signout() {
        try{
          await signOut(AppData)
          //redirecting to home 
          window.location.href="/login"
          console.log("signout here")
          toast.success("signout success",{
            position: "bottom-left"
          })
        }catch(err){
          console.log(err)
          toast.success("signout err",{
            position: "bottom-right"
          })
        }
        
      }
      const mainUser = AppData.currentUser?.displayName

  return {mainUser, SignInF, LogIn, signout}
}

export default useAuthAll




          //after state changing process
          // setTimeout(()=>{
          //   data.onAuthStateChanged((user)=>{
          //       if(user){
          //           console.log(user)
          //           setMainUser(user.displayName)
          //       }
          //     })
          // },5000)
          //downLoading data in firebase firestore need to solved
          // if(store){
          //   const docRef = doc(store, name, user?.uid)
          //   setDoc(docRef, {
          //     name: name,
          //     email: email
          //   })
          // }