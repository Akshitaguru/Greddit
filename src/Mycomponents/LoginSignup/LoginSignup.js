import React, { useState, useTransition } from 'react'

import cat_icon from './Images/cat.png'
import name_icon from './Images/user.png'
import user_icon from './Images/verification.png'
import email_icon from './Images/email.png'
import passward_icon from './Images/passward.png'


import './loginsignup.css'

const LoginSignup = () => {

 
   const [action,setAction] = useState(" Login");

  return (
  <>


  <img src={ cat_icon } className="cat" alt=" "/>
  <div className="gredit"> <p>GREDIT</p> </div>
    <div className= "container">
    <div className= "header">
      <div className= "text">{action}</div>
      <div className= "underline" ></div>
      </div>  
      
      <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
        <img src={ name_icon } className="photo" alt=" "/>
        <input type="text" placeholder="Name"/>
        </div>}
        
        {action==="Login"?<div></div>:<div className="input">
        <img src= {email_icon} className="photo" alt=" "/>
          <input type="email" placeholder="Email Id"/>
        </div>}
      
        <div className="input">
        <img src= {user_icon} className="photo" alt=" "/>
          <input type="text" placeholder="Username"/>
        </div>

        
        <div className="input">
        <img src= {passward_icon} className="photo" alt=" "/>
          <input type="passward" placeholder="Passward" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-passward">Forgot Passward?<span>Click Here</span></div>}
     
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

        </div>
      </div>
      
    </>
  )};

export default LoginSignup;
