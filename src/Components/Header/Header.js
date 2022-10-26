import React,{useState} from 'react'
import {Menu, Search, Apps, Notifications, VideoCall, PersonAddOutlined} from "@mui/icons-material"
import {Button, Avatar, Popover} from "@mui/material"
import logo from "../../assets/logo1.png"
import "./Styles.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'


const Header = () => {

  const Navigaters = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () =>{
      setAnchorEl(null)
  }

  const HomeRedirect = () => {
    console.log("werwerwer");
    Navigaters("/signup");
  };

  const open  = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined;

  let localstorageData = JSON.parse(localStorage.getItem("userInfo")) || [];

  // SIGNOUT FUNCTION 

  const SignOutFunc =() =>{
      localStorage.clear();
  }

  // useEffect(()=>{
    
  // },SignOutFunc)

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
            {
               localstorageData.length !== 0 ? <Avatar onClick={handleClick} alt={ localstorageData.length !== 0 ?localstorageData.name.toUpperCase() : null} /> : <Button  variant="outlined" className='Header_signIn' onClick={HomeRedirect} >
                <Avatar className='signIn_Avatar' sx={{ width: 30, height: 30 }} />
                <p>Sign In</p>
              </Button>
              
            }
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
                    <Avatar className='header_avatar' alt={ localstorageData.length !== 0 ?localstorageData.name.toUpperCase() : null}
                      sx={{ width: 70, height: 70 }} />
                  {/* Main part of the Popout Html  */}
                  <div className="home_text">
                    <div className="home_displayName">
                      {
                        localstorageData.length !== 0 ? localstorageData.name : null
                      }
                    </div>
                    <div className="home_mail">
                        {
                        localstorageData.length !== 0 ? localstorageData.email : null
                      }
                    </div>
                  </div>
                  {/* second part */}
                </div>
                <div className="home_popover_btm">
                  <div className="home_addBtn">
                    <PersonAddOutlined className='home_addIcon' />
                  </div>
                  <Button variant='outlined' className='home_signOut' onClick={SignOutFunc}>
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