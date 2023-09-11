import { Typography, Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
import  SettingslinedIcon  from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import NotificationList from "../../components/NotificationList";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Logo from "../../components/Logo";

const TopBar = () => {
  const theme = useTheme();
  const colors=tokens(theme.palette.mode);
  const[open, setOpen] = useState(false);
  const [openN, setOpenN] = useState(false);

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
  const [time, setTime] = useState(new Date());
  useEffect(()=>{
    setInterval(()=>setTime(new Date()),1000)
  },[])
  const currentDate = today.toLocaleString(undefined, options);
  const timeAndDate = currentDate.split(" at ");
  let dropdownRef = useRef();

  useEffect(()=>{
    let handler = (e)=>{
      if(!dropdownRef.current.contains(e.target)){
        setOpen(false);
        setOpenN(false);
      }
    };
    document.addEventListener("mousedown",handler);
  });
  const colorMode = useContext(ColorModeContext);

  return (
    <Box className="TopbarBox" p={2}>
      <Logo />
      
      {/*<h3 color={colors.grey[100]} >{timeAndDate[0]}<br/>{time.toLocaleTimeString().substring(0,5)}</h3>*/}
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

            {/* <Typography 
                variant ="h6"
                textAlign={"center"}
                color={colors.greenAccent[400]}
            >
                {time.toLocaleTimeString().substring(0,5)}
            </Typography> */}
            </Box>
        </Box>

        {/*Icons*/}
      <Box display = "flex" ref={dropdownRef}>

        <IconButton onClick= {colorMode.toggleColorMode}>
            {theme.palette.mode ==='dark' ? (
                <DarkModeOutlinedIcon/>
            ) : (<LightModeOutlinedIcon/>)
        }
        </IconButton>
        <IconButton onClick={() => {
          setOpenN(!openN);
          setOpen(false);
        }}>
            <NotificationsOutlinedIcon/>
        </IconButton>
        {openN && <NotificationList/>}
        <IconButton onClick={() => {
          setOpen(!open);
          setOpenN(false);
          }}>
            <SettingslinedIcon/>
        </IconButton>
        {open && <Dropdown/>}
        <IconButton>
            <PersonOutlinedIcon/>
        </IconButton>
        
        
      </Box>
      
    </Box>
  );
};


export default TopBar;
