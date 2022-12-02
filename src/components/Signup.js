import React, { useEffect, useRef, useState } from "react";
import Profile from './Profile';
import './signup.css';
function Signup(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const confirmpassword=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localconfirmPassword=localStorage.getItem("confirmpassword")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   },[ localSignUp,localEmail])
   let detailsgiven
   let check
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value&&(password.current.value===confirmpassword.current.value))
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("confirmpassword",confirmpassword.current.value)
        localStorage.setItem("signUp",email.current.value)
        detailsgiven=true
        check=true
        alert("Account created successfully!!")
        window.location.reload()
      }
      else{
         detailsgiven=false
      }
   }
    return(
        <div>
            {showHome?<Profile/>:
            (show?

             <p>Details Saved</p>
                :
                <div className="container1">
                          <h1 className="tit">Signup</h1>
                        <div className="input_space ">
                            <input placeholder="FullName" type='text'  className='intext' ref={name} />
                        </div>
                        <div className="input_space ">
                            <input placeholder="Email" type='text'  className='intext' ref={email} />
                        </div>
                        <div className="input_space ">
                            <input placeholder="Password" type='text' className='intext' ref={password} />
                        </div>
                        <div className="input_space ">
                            <input placeholder="ConfirmPassword" type='text' className='intext' ref={confirmpassword} />
                        </div>
                        {check && (detailsgiven ? <p>Sucessfully signedup </p>:<p>Error : All fields are mandatory</p>) }

                        <button className="but" onClick={handleClick}>Sign Up</button>
                </div>)
            }
        </div>
    );
}
export default Signup;
