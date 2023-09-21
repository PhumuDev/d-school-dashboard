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
                fontWeight ="bold" 
                sx={{mb: "5px"}}
            >
                {title}
            </Typography>

            <Typography 
                variant ="h7"
                color={nc}
            >
                {open&&subtext}
            </Typography>
            </Box>
        </a>
        
        );
        }
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <div className = "notificationList" style={{backgroundColor: colors.primary[400], border:"3px solid"+ colors.primary[500]}}>
            
                <Typography 
                    variant ="h5"
                    color={colors.grey[100]}
                    fontWeight ="bold" 
                    sx={{mb: "5px"}}
                >
                    NOTIFICATIONS
                </Typography>
                <Notification 
                title="SOLAR GENERATION OPTIMAL" 
                subtext="The solar panels are generating the optimal amount of energy."
                nc={colors.greenAccent[300]}
                />
                <Notification 
                title="HIGH ENERGY USAGE" 
                subtext="Energy usage is currently 2x above the above the expected usage."
                nc={colors.redAccent[300]}
                />
                <Notification 
                title="LOW WATER CONSUMPTION" 
                subtext="The building is consuming 2x less than the expected consumption."
                nc={colors.greenAccent[300]}
                />

    </div>
    )
}

export default NotificationList;