import React, { useState } from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "./Firebase"

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth 
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        
        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" 
                    alt=""
                />
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} 
                    onChange= {e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange= {e => setPassword(e.target.value)}/>

                    <button className="login_signinButton" onClick = {SignIn}>
                        Sign In
                    </button>

                </form>
                <p>somthing.....</p>

                <button className="login_registerButton" onClick = {register}>
                    Creat Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
