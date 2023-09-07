import { Box, IconButton, useTheme } from "@mui/material";
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


const TopBar = () => {
  const theme = useTheme();
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
    <Box className="TopbarBox" display="flex" justifyContent="space-between" p={2}>
      <Header title='HPI DESIGN' subtitle="SCHOOL" />
      
      <Header title={timeAndDate[0]} subtitle={time.toLocaleTimeString().substring(0,5)}/> {/*}Create an instance of the header class*/}
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
