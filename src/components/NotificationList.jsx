import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";
const NotificationList = () => {
    function Notification(props) {
        return (
            <a href="#" className="notification-item" style={{color: colors.grey[100]}}>
                {props.children}
            </a>
        );
        }
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <div className = "notificationList" style={{backgroundColor: colors.primary[400]}}>
            <Typography 
                variant ="h3"
                color={colors.grey[100]}
                fontWeight ="bold" 
                sx={{mb: "5px"}}
            >
                NOTIFICATIONS
            </Typography>
            <Notification>Solar generation optimal</Notification>
            <Notification>Electricity usage high</Notification>
            <Notification>Water usage high</Notification>
        </div>
    )
}

export default NotificationList;