import React from 'react'
import SideHeader from './SideHeader/SideHeader'
import './SideBar.css';
import SidebarCard from './SidebarCard/SidebarCard'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';

function Sidebar() {
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

            <Button type="submit">+ New Contact</Button>

        </div>
    )
}

export default Sidebar
