import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import StorefrontIcon from "@mui/icons-material/Storefront";
import '../styles/Login.css'

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
            <h1>sign-in</h1>
            <form action="">
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className="login_signin_button" type="submit">Sign In</button>
            </form>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laboriosam reprehenderit beatae vitae quas pariatur recusandae voluptates fugit itaque autem, odio voluptatibus iure in quibusdam asperiores repellat tempore necessitatibus aliquid?
            </p>

            <button className="login_reg_button">Create you eSHOP</button>
        </div>
    </div>
  )
}

export default Login