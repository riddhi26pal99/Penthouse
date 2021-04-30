import { IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io';
import RoomHeader from './RoomHeader/RoomHeader'
import './Rooms.css'

const CreateRoomModal = ({ setShowRoomModal }) => {
    const [roomName, setRoomName] = useState('');
    const [participants, setParticipants] = useState('');
    const [coverColor, setCoverColor] = useState('');

    const handleClose = () => {
        setRoomName('');
        setParticipants('');
        setCoverColor('');
        setShowRoomModal(false);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(roomName, participants, coverColor);
    }

    const selectColor = e => {
        e.preventDefault();
        setCoverColor(e.target.className);
    }

    const addParticipant = (value) => {
        setParticipants(value);
    }   

    const colors = [
        'bg-pink-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-blue-600',
        'bg-purple-500',
        'bg-indigo-500',
    ];

    return (    
    <div className="create-room">
        <div className="room-modal">
                <div className="modal-title">
                Create New Room
                <IconButton onClick={handleClose}>
                    <IoMdCloseCircle className='text-red-500' />
                </IconButton>
            </div>
                <form>
                    <div className="field">
                        <label>Room Name</label> 
                        <input value={roomName} onChange={e => setRoomName(e.target.value)} type="text" placeholder='Room Name'/>
                    </div>
                    <div className="field">
                        <label>Add Participants</label>
                    <input value={participants} onChange={e => addParticipant(e.target.value)} type="text" placeholder='Participants'/>
                    </div>
                    <div className="room-field">
                        Selet Cover Color
                        <div className="cover-colors">
                            <div className='colors'>
                            {colors.map((color, index) => (
                                <button className={`${color}`} key={index} onClick={(e) => selectColor(e)}></button>
                            ))}
                            </div>
                            <button className='submit-button' type='submit' onClick={handleFormSubmit}>Create</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
    );
}

function Rooms() {
    const [showRoomModal, setShowRoomModal] = useState(false);

    

    return (
        <div className="Rooms">
            <RoomHeader />
            {showRoomModal ? <CreateRoomModal setShowRoomModal={setShowRoomModal} /> : (
                // TODO -> SHOW ROOM CARDS
                <button className='new-room' onClick={() => setShowRoomModal(true)}>Create New Room</button>
            )}
        </div>
    )
}

export default Rooms
