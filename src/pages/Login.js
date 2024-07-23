import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className="login">
        <Link to='/' style={{textDecoration: "none"}} > 
        <div className="login_logo">
            <StorefrontIcon className="login_image" fontSize="large" />
            <h2 className="login-logoTitle">eSHOP</h2>
        </div>
        </Link>
        <div className="login_container">
            
        </div>
    </div>
  )
}

export default Login