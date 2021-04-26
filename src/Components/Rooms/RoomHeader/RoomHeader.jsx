import React from 'react'
import "./RoomHeader.css"

import { auth } from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../../../features/userSlice';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function RoomHeader() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    const handleLogout = () => {
        auth.signOut();
        dispatch(logout());
    }

    return (
        <div className="roomHeader">
           <div className="userContainer">
                <img src={user.image} alt="user" />
                <span>
                    <ExpandMoreIcon />
                </span>
                <div className="userInfo">
                    <h1>{user.username}</h1>
                    <p>{user.bio}</p>
                </div>
            </div>

            <div className="flex flex-row mx-8">
                <button onClick={() => {}} className="aboutDev">
                About The Devs
                </button>
                
                <button onClick={handleLogout} className="logOut">
                Logout            
                </button>
            </div>
            
        </div>
    )
}

export default RoomHeader
