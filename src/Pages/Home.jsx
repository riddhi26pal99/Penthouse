import React, { useState } from 'react'

import Rooms from '../Components/Rooms/Rooms'
import SideBar from '../Components/Sidebar/SideBar'

const CreateRoomModal = () => {
    return (
        <div className="room-modal">
            <h1>Create New Room</h1>
        </div>
    )
}

function Home() {
    const [showRoomModal, setShowRoomModal] = useState(false);

    return (
        <>
        {showRoomModal && <CreateRoomModal />}
        <div className="flex flex-row">
            <SideBar />
            <Rooms setShowRoomModal={setShowRoomModal} />

        </div>
        </>
    )
    
}

export default Home
