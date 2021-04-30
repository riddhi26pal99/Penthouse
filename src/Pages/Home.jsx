import React from 'react'

import Rooms from '../Components/Rooms/Rooms'
import SideBar from '../Components/Sidebar/SideBar'

function Home() {

    return (
        <div className="flex flex-row">
            <SideBar />
            <Rooms />

        </div>
    )
    
}

export default Home
