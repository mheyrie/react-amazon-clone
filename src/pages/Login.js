import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import StorefrontIcon from "@mui/icons-material/Storefront";
import '../styles/Login.css'
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                  navigate('/')  
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className="login">
        <Link to='/' style={{textDecoration: "none"}} > 
        <div className="login_logo">
            <StorefrontIcon className="login_image" fontSize="large" />
            <h2 className="login-title">eSHOP</h2>
        </div>
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className="login_signin_button" type="submit" onClick={signIn} >Sign In</button>
            </form>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laboriosam reprehenderit beatae vitae quas pariatur recusandae voluptates fugit itaque autem, odio voluptatibus iure in quibusdam asperiores repellat tempore necessitatibus aliquid?
            </p>

            <button className="login_reg_button" onClick={register} >Create your eSHOP</button>
        </div>
    </div>
  )
}

export default Login