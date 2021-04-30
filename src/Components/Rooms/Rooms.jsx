import React, { useState } from 'react'
import RoomHeader from './RoomHeader/RoomHeader'
import './Rooms.css'

const CreateRoomModal = ({ setShowRoomModal }) => {
    return (
        <div className="room-modal">
            <h1>Create New Room</h1>
        </div>
    )
}

function Rooms() {
    const [showRoomModal, setShowRoomModal] = useState(false);

    

    return (
        <>
        {showRoomModal && <CreateRoomModal setShowRoomModal={setShowRoomModal} />}
        <div className="Rooms">
            <RoomHeader />
        </div>
        </>
    )
}

export default Rooms
