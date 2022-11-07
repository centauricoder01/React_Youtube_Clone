import React,{useState} from 'react'
import {Menu, Search, Apps, Notifications, VideoCall, PersonAddOutlined} from "@mui/icons-material"
import {Button, Avatar, Popover} from "@mui/material"
import logo from "../../assets/logo1.png"
import "./Styles.css"
import {  useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";



const Header = () => {

  const Navigaters = useNavigate()

  const [SearchData , setSearchData] = useState('')

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () =>{
      setAnchorEl(null)
  }

  const HomeRedirect = () => {
    Navigaters("/signup");
  };

  const open  = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined;


  // SIGNOUT FUNCTION 

  const SignOutFunc =() =>{
      localStorage.clear();
      Navigaters('/signup')
  }
  let localstorageData = JSON.parse(localStorage.getItem("userInfo")) || [];

  const HandleInputValue = ()=>{
    console.log(SearchData)
    Navigaters("/searchvideo")
  }


  // POP DIALOG FUNCTION OF THE WEBSITE 

  const [opens, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloses = () => {
    setOpen(false);
  };
 
  return (
    <div className='header'>
        <div className="header_left">
            <Menu className='Header_MenuIcons' />
            <img className = "Header_Logo" src={logo} alt="Youtube" onClick={()=>{Navigaters("/")}} />
        </div>
        <form className='header_center'>
            
            <input type="text" className='Header_input' placeholder='Search' value={SearchData} onChange={(e)=>{
              setSearchData(e.target.value)
            }} />
            <Button className="Header_btn" onClick={HandleInputValue}>
                <Search className="Header_searchIcon" />
                </Button>
        </form>
        <div className="Header_Right">
            <VideoCall onClick={handleClickOpen}/>
            <Apps onClick={handleClickOpen}/>
            <Notifications onClick={handleClickOpen}/>
            {
               localstorageData.length !== 0 ? <Avatar onClick={handleClick} alt={ localstorageData.length !== 0 ?localstorageData.name.toUpperCase() : null}
                    src="https://media-exp1.licdn.com/dms/image/D4D03AQEnK37DqEmQVA/profile-displayphoto-shrink_400_400/0/1666328440907?e=1672272000&v=beta&t=iWA6rkRSL_jQZ_00p51af3As58hSGLjVZzmOt0Eh" /> : <Button  variant="outlined" className='Header_signIn' onClick={HomeRedirect} >
                <Avatar className='signIn_Avatar' sx={{ width: 30, height: 30 }} />
                <p>Sign In</p>
              </Button>
            }

{/* POP DIALOG OF THE WEBSITE  */}

      <Dialog
        open={opens}
        onClose={handleCloses}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Developer Request to the User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Developer is working on this Feature, Please Wait For some time.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloses}>Ok,I will wait.</Button>
          <Button onClick={handleCloses} autoFocus>
            Give me fast.
          </Button>
        </DialogActions>
      </Dialog>

{/* POP DIALOG OF THE WEBSITE */}

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
                    src="https://media-exp1.licdn.com/dms/image/D4D03AQEnK37DqEmQVA/profile-displayphoto-shrink_400_400/0/1666328440907?e=1672272000&v=beta&t=iWA6rkRSL_jQZ_00p51af3As58hSGLjVZzmOt0Eh"
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