import React,{useState} from 'react'
import {Menu, Search, Apps, Notifications, VideoCall, PersonAddOutlined} from "@mui/icons-material"
import {Button, Avatar, Popover} from "@mui/material"
import logo from "../../assets/logo1.png"
import "./Styles.css"



const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () =>{
      setAnchorEl(null)
  }

  const open  = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined;

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
            <Avatar onClick={handleClick} />
            {/* POP PART OF THE WEBSITE  */}
            <Popover open={open} id={id} onClose={handleClose} anchorEl={anchorEl}   anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
              {/* MAIN HTML OF THE POP OVER  */}
              <div className="home_popoverContainer">
                <div className="home_popover_top">
                    <Avatar className='header_avatar' alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 70, height: 70 }} />
                  {/* Main part of the Popout Html  */}
                  <div className="home_text">
                    <div className="home_displayName">
                      Rajendra Patel
                    </div>
                    <div className="home_mail">
                        rajendraPatelofficial@gmail.com
                    </div>
                  </div>
                  {/* second part */}
                </div>
                <div className="home_popover_btm">
                  <div className="home_addBtn">
                    <PersonAddOutlined className='home_addIcon' />
                  </div>
                  <Button variant='outlined' className='home_signOut'>
                    Sign Out
                  </Button>
                  <div className="home_popover_footer">
                    <p>Privacy Policy</p>
                    <span>.</span>
                    <p>Terms of service</p>
                  </div>
                </div>
              </div>
            </Popover>
        </div>
    </div>
  )
}

export default Header