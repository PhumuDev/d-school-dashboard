import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";

import { useState } from "react";
import { border } from '@mui/system';
const NotificationList = () => {
    
    function Notification({title,subtext,nc}) {
        const [open, setOpen] = useState(false);
        return (
            <a href="#" className="notification-item" onClick={()=>setOpen(!open)}> 
            <Box>
            <Typography 
                variant ="h6"
                color={colors.grey[100]} 
                sx={{mb: "5px"}}
                className="dropdown-label"
            >
                {title}
            </Typography>

            <Typography 
                variant ="h7"
                color={nc}
                fontWeight={100}
            >
                {open&&subtext}
            </Typography>
            </Box>
        </a>
        
        );
        }
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const allNotifications = [
        ["Solar Generation Optimal", "The solar panels are generating the optimal amount of energy.",colors.greenAccent[300]],
        ["High Energy Usage", "Energy usage is currently 2x above the above the expected usage.",colors.redAccent[300]],
        ["Low Water Consumption", "The building is consuming 2x less than the expected consumption.",colors.greenAccent[300]],
    ];
    const notis=[];
    for (let i =0;i<allNotifications.length;i++) {
        notis.push(<Notification title={allNotifications[i][0]} subtext={allNotifications[i][1]} nc={allNotifications[i][2]}/>);
        
    }
    return(
        <div className = "notificationList" style={{backgroundColor: colors.primary[400], border:"3px solid"+ colors.primary[500]}}>
                <div className = "middle-container">
                    <Typography 
                        variant ="h4"
                        color={colors.grey[100]}
                        fontWeight ="bold" 
                        sx={{mb: "5px"}}
                    >
                        Notifications
                    </Typography>
                </div>
                {notis}

    </div>
    )
}

export default NotificationList;