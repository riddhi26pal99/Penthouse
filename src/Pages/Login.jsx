import React from 'react';

import {ReactComponent as LoginSvg} from '../assets/images/login.svg';
import { FaGoogle } from "react-icons/fa";

function Login() {
    return (
        <div className='login'>
            <div className="login-card">
                <div className="login-left">
                    <h1>PENTHOUSE.</h1>
                    <h3>Drop In Video Chat</h3>
                    <div className="login-desktop-svg">
                        <LoginSvg />
                    </div>
                </div>
                <div className="login-right">
                    <h2>Login for free <strong>NOW</strong> to be part of our exclusive fam.</h2>
                    <button className="login-button">
                        <FaGoogle />
                        Continue With Google
                    </button>
                    <p>Taking over the world by storm 🚀🌏</p>
                </div>
            </div>
        </div>
    )
}

export default Login
