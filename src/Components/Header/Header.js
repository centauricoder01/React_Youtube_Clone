import React from 'react'
import {Menu, Search, Apps, Notifications, VideoCall} from "@mui/icons-material"
import {Button, Avatar} from "@mui/material"
import logo from "../../assets/logo1.png"
import "./Styles.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="header_left">
            <Menu className='Header_MenuIcons' />
            <img className = "Header_Logo" src={logo} alt="Youtube" />
        </div>
        <form className='header_center'>
            <input type="text" className='Header_input' placeholder='Search' />
            <Button className="Header_btn">
                <Search className="Header_searchIcon" />
                </Button>
        </form>
        <div className="Header_Right">
            <VideoCall/>
            <Apps/>
            <Notifications />
            <Avatar />
        </div>
    </div>
  )
}

export default Header