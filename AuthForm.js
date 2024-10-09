import React, { useState } from 'react'

export default function AuthForm() {
    const[isLogin,setIsLogin]=useState(true);
  return (
    <div className='container'>
    <div className='form-container'>
        <div className='form-toggle'>
            <button className={isLogin ?'active': ""} onClick={()=>setIsLogin(true)}>login</button>
            <button className={!isLogin ?'active': ""} onClick={()=> setIsLogin(false)}>sign-up</button>
        </div>
        {isLogin ?<>
        <div className='form'>
           <h2>login form</h2>
           <input type='email' placeholder='email'/>
           <input type='password' placeholder='password'/>
           <a href='#'>Forget password</a>
           <button>Login</button>
           <p>Not a member<a href='#' onClick={()=> setIsLogin(false)}>sign up</a></p>
        </div>
        </> : <>
        <div className='form'>
        <h2>sign UP</h2>
           <input type='email' placeholder='Email'/>
           <input type='password' placeholder='Password'/>
           <input type='Confirm password' placeholder=' Confirm password'/>
           </div>
        </>}

        </div> 
     
    </div>
  )
}
