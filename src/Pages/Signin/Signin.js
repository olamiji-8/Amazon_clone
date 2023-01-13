import React from 'react'
import "./Signin.css"
import Logo from "../../Asset/amazonn.png"

const Signin = () => {
  return (
    <div>
      <img src={Logo} alt='#'  height='30px' className='Signin__logo'/>
      <div>
        <p>Sign in</p>

        <form>
          <label>Email or mobile phone number <input type="text"/></label>
          <button>Continue</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </div>
      <div>
        <p>New to Amazon?</p>
        <button>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Signin