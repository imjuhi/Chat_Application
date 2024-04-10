import React from 'react'
import Add from "../img/addavatar.png"

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">ChimeIn</div>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder ="email"/>
          <input type="password" placeholder ="password"/>
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login