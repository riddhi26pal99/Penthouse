import React from 'react'
import Rooms from '../Components/Rooms/Rooms'
import SideBar from '../Components/Sidebar/SideBar'

function home() {
    return (
        <div class="flex flex-row">

            <SideBar />
            <Rooms />

        </div>
    )
}

export default home
