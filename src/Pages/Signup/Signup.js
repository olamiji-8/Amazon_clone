import React from 'react'
import "./Signup.css"
import Logo from "../../Asset/amazonn.png"

const Signup = () => {
  return (
    <div>
         <img src={Logo} alt='#'  height='30px' className='Signup__logo'/>
         <div>
            <p>Create account</p>
            <label> Your name <input type="text"  placeholder='First and last name'/></label>
            <label>Mobile number or email <input type="text" /></label>
            <label>Password <input type="password" placeholder='At least 6 characters' minLength={6}/></label>
            <p>Passwords must be at least 6 characters.</p>
            <label>Re-enter password <input type="password"  minLength={6}/></label>
            <button>Continue</button>
         </div>
         <div>
            <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
         </div>
         <div>
            <p>Already have an account? Sign in</p>
         </div>
    </div>
  )
}

export default Signup