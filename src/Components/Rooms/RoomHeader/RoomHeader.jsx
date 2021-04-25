import React from 'react'
import "./RoomHeader.css"
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { Button } from '@material-ui/core';

function RoomHeader() {
    const url = "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

    return (
        <container className="roomHeader">
           <div className="userContainer">
                <img src={url} alt="" />
                <span>
                    <ExpandMoreIcon />
                </span>
                <div className="userInfo">
                    <h1>John Doe</h1>
                    <p>Hey, I am John</p>
                </div>
            </div>

            <div class="flex flex-row mx-8">
                <button type="onClick" className="aboutDev">
                About The Devs
                </button>
                
                <button type="onClick" className="logOut">
                Logout            
                </button>
            </div>
            
        </container>
    )
}

export default RoomHeader
