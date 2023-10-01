import { Typography, Box, IconButton, useTheme, Tooltip } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
import  SettingslinedIcon  from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import Dropdown from "../../components/Dropdown";
import NotificationList from "../../components/NotificationList";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Logo from "../../components/Logo";
import Login from "../../components/Login";

const TopBar = ({onToggleSlideshow,isSlideshowMode, setVideoLink, setSlideshowTimer, isAdmin, setIsAdmin}) => {
  const theme = useTheme();
  const colors=tokens(theme.palette.mode);
  const[open, setOpen] = useState(false);
  const [openN, setOpenN] = useState(false);
  const [openL, setOpenL] = useState(false);
  

  {/*}Create and format date*/}
  const today = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }
  
  const currentDate = today.toLocaleString(undefined, options);
  const timeAndDate = currentDate.split(" at ");
  let dropdownRef = useRef();

  useEffect(()=>{
    let handler = (e)=>{
      if(!dropdownRef.current.contains(e.target)){
        setOpen(false);
        setOpenN(false);
        setOpenL(false);
      }
    };
    document.addEventListener("mousedown",handler);
  });

  const colorMode = useContext(ColorModeContext);

  return (
    <Box className="TopbarBox" p={2}>
      <Logo />
      
      
      <Box> 
        <Box className="date-time" mb = "0px" >
            <Typography 
                variant ="h4"
                color={colors.grey[100]}
                fontWeight ="bold" 
                sx={{mb: "1px"}}
            >
                {timeAndDate[0]}
            </Typography>

            </Box>
        </Box>

  
        {/*Icons*/}
      <Box display = "flex" ref={dropdownRef}>

        <Tooltip 
          title = "Toggle slideshow" 
          arrow
          enterDelay={900}
          leaveDelay={20}
        >
          <IconButton onClick={() => onToggleSlideshow()}>
              
              {isSlideshowMode ? (
                  <ToggleOnOutlinedIcon style={{color: "#3da58a"}}/>
              ) : (<ToggleOffOutlinedIcon/>)
              }
          </IconButton>
        </Tooltip>
        
        <Tooltip 
          title = "Change Theme" 
          arrow
          enterDelay={900}
          leaveDelay={20}
        >
          <IconButton onClick= {colorMode.toggleColorMode}>
              {theme.palette.mode ==='dark' ? (
                  <DarkModeOutlinedIcon/>
              ) : (<LightModeOutlinedIcon/>)
          }
          </IconButton>

        </Tooltip>

        {/* <Tooltip 
          title = "Notifications" 
          arrow
          enterDelay={900}
          leaveDelay={20}
        >
          <IconButton onClick={() => {
            setOpenN(!openN);
            setOpen(false);
            setOpenL(false);
          }}>
              <NotificationsOutlinedIcon/>
          </IconButton>
        </Tooltip>
        {openN && <NotificationList/>}
         */}
         
        <Tooltip 
          title = "Settings" 
          arrow
          enterDelay={900}
          leaveDelay={20}
        >
          {/* Display settings icon only if admin */}
          {isAdmin &&(
            
            <IconButton onClick={() => {
              setOpen(!open);
              setOpenN(false);
              setOpenL(false);
              }}>
                <SettingslinedIcon style={{color: "#3da58a"}}/>
            </IconButton>
          )}

        </Tooltip>
        
        {open && <Dropdown setVideoLink={setVideoLink} setSlideshowTimer = {setSlideshowTimer}/>}

        <Tooltip 
          title = "Account" 
          arrow
          enterDelay={900}
          leaveDelay={20}
        >
          <IconButton onClick={() => {
            setOpenL(!openL);
            setOpenN(false);
            setOpen(false);
            }}>
              {isAdmin ? (
                  <PersonOutlinedIcon style={{color: "#3da58a"}}/>
              ) : (<PersonOutlinedIcon/>)
              }
              
          </IconButton>
        </Tooltip>
        {openL && <Login onToggleAdmin = {() => setIsAdmin(!isAdmin)} isAdmin = {isAdmin}/>}
        
      </Box>
      
    </Box>
  );
};


export default TopBar;
