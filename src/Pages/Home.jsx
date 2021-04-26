import React from 'react'
import Rooms from '../Components/Rooms/Rooms'
import SideBar from '../Components/Sidebar/SideBar'
import { auth } from '../firebase'

function home() {
    return (
        <div class="flex flex-row">
            <button onClick={() => auth.signOut()}>Logout</button>
            <SideBar />
            <Rooms />

        </div>
    )
}

export default home
