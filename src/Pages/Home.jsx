import React from 'react'
import SideBar from '../Components/Sidebar/SideBar'
import { auth } from '../firebase'

function home() {
    return (
        <div>
            <button onClick={() => auth.signOut()}>Logout</button>
            <SideBar />
        </div>
    )
}

export default home
