import React from 'react'
import "./SidebarCard.css"
import VideocamIcon from '@material-ui/icons/Videocam';

function SidebarCard() {
    const image = 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';

    return (

        <React.Fragment>
            <div className="contactCard">
                <div className="contact">
                    <img src={image} alt= "" className="contactImage" />
                    <div className= "ContactInfo">
                        <p>Jessica James</p>
                    </div>
                </div>
                <VideocamIcon className="camCord"/>
            </div>
            <hr />
            {/* <div className="custom-underline"></div> */}

        </React.Fragment>
        
    )
}

export default SidebarCard
