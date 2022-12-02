import React from "react";
import './profile.css'
function Profile(){
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div className="profile">
            <h1>Profile </h1>
            <h3>Full Name : {localStorage.getItem('name')}</h3>
            <h3>Email     : {localStorage.getItem('email')}</h3>
            <h3>Password  : {localStorage.getItem('password')}</h3>
          
            <button className='buton' onClick={deleteAccount} >Delete</button>
        </div>
    );
}
export default Profile;