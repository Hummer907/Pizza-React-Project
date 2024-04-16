import React, { useState } from 'react'
import './LogIn.css'
import { assets } from '../../assets/assets';

const LogIn = ({setShowLogIn}) => {

    const [currState,setCurrState] = useState("Sing Up");
  return (
    <div className='login'>
        <form  className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={() =>setShowLogIn(false)} src={assets.cross_icon}/>
            </div>
            <div className="login-inputs">
                {currState !== "LogIn" ? <input type="text" placeholder='Your name' required /> : <></>}
                
                <input type='text'  placeholder='Your email' required/>
                <input type='password'  placeholder='Your password' required/>
            </div>
            <button>{currState =='Sign Up' ? "Create Account" : "LogIn"}</button>
            {
                currState =='LogIn' ? <p>Create a new Account ? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p> : 
                                                            <p>Already have an account? <span onClick={() => setCurrState("LogIn")}>LogIn Here</span></p>
            }
            
        </form>
    </div>
  )
}

export default LogIn