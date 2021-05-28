import React from 'react'
import "./RoomCard.css"
import { ReactComponent as IconPerson} from "../../../assets/Vector.svg"
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../../firebase';

function RoomCard() {
    
    const icon = "src\assets\Vector.svg"

    const [roomDetails] = useDocument(db.collection("Rooms"))
    console.log(roomDetails);

    return (
        <div className="roomCard__container">

            <div className="roomCard">
                <div className="roomCard__top">
                    <h1>Just chillin</h1>
                    <p>Host: John Doe</p>
                    
                    <div className="img__div">
                        <img src="https://images.unsplash.com/photo-1618926749434-0578ceecdfab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt=""/>
                        <img src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />
                    </div>
                </div>

                <div className="roomCard__bottom">
                    <IconPerson className="iconPerson"/>
                    <p>2</p>
                    <h2>Join Now</h2>
                </div>
            </div>
        </div>
    )
}

export default RoomCard
