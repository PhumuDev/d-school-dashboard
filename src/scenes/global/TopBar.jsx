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
  const currentDateT = today.toLocaleString(undefined, options);
  const timeAndDate = currentDateT.split(" at ");

  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <IconButton></IconButton>
      <Header title={timeAndDate[0]} subtitle={timeAndDate[1].substring(0,5)}/> {/*}Create an instance of the header class*/}
        {/*Icons*/}
      <Box display = "flex">

        <IconButton onClick= {colorMode.toggleColorMode}>
            {theme.palette.mode ==='dark' ? (
                <DarkModeOutlinedIcon/>
            ) : (<LightModeOutlinedIcon/>)
        }
        </IconButton>
        <IconButton onClick={() => setOpenN(!openN)}>
            <NotificationsOutlinedIcon/>
        </IconButton>
        {openN && <NotificationList/>}
        <IconButton onClick={() => setOpen(!open)}>
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
