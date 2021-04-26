import React from 'react';
import { auth, provider, db } from '../firebase';

import {ReactComponent as LoginSvg} from '../assets/images/login.svg';
import { FaGoogle } from "react-icons/fa";

function Login() {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).then( async (result) => {
            const user = {
                username: result.user.displayName,
                image: result.user.photoURL,
                email: result.user.email,          
                uid : result.user.uid,   
            }

            const userExists = await db.doc(`/users/${user.uid}`).get();

            if (!userExists.exists) {
                await db.doc(`users/${user.uid}`).set({
                    username: user.username,
                    image: user.image,
                    email: user.email,
                }).catch(err => {
                    console.log(err);
                });
            } 

        }).catch((error) => {
            alert(error.message);
        })
    }

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
                    <button className="login-button" onClick={signIn}>
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
