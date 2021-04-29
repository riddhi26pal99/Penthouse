import React, { useRef, useState } from 'react'
import SideHeader from './SideHeader/SideHeader'
import './SideBar.css';
import SidebarCard from './SidebarCard/SidebarCard'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { IoMdCloseCircle } from 'react-icons/io';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';

const CreateContactModal = ({ setShowContactModal }) => {
    const contactEmail = useRef();
    const contactName = useRef();

    const handleClose = () => {
        contactEmail.current.value = '';
        contactName.current.value = '';
        setShowContactModal(false);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(contactEmail.current.value, contactName.current.value);
    }

    return (
        
            <div className="create-contact">
                <div className="modal-title">
                Create New Contact
                <IconButton onClick={handleClose}>
                    <IoMdCloseCircle className='text-red-500' />
                </IconButton>
            </div>
                <form>
                    <div className="field">
                        <label>Name</label> 
                        <input ref={contactName} type="text" placeholder='Contact Name'/>
                    </div>
                    <div className="field">
                        <label>Email Id</label>
                    <input ref={contactEmail} type="email" placeholder='Contact Email'/>
                    </div>
                    <div className="field">
                        <button type='submit' onClick={handleFormSubmit}>Create</button>
                    </div>
                </form>
            </div>
        
    )
}

function Sidebar() {
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <div className="sideBar">
            <SideHeader />
            <div className="yourContact">
                <h3>Your Contacts 
                    <span className="arrow">
                        <ArrowForwardIcon />
                    </span>
                </h3>
            </div>

             <div className="contactList">
                        <SidebarCard />
                        <SidebarCard />
                        <SidebarCard />
                        <SidebarCard />
                        <SidebarCard />
                        <SidebarCard />
                        <SidebarCard />
                        <SidebarCard />
            </div>
            {showContactModal ? (<CreateContactModal setShowContactModal={setShowContactModal} />) : (
                

                    <Button onClick={() => setShowContactModal(true)}>+ New Contact</Button>
                
            )}
            

        </div>
    )
}

export default Sidebar
