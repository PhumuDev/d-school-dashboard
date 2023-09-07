import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";
const NotificationList = () => {
    function Notification(props) {
        return (
            <a href="#" className="notification-item">
                {props.children}
            </a>
        );
        }
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <div className = "notificationList" style={{backgroundColor: colors.primary[400]}}>
            <h9>NOTIFICATIONS</h9>
            <Notification>Solar generation optimal</Notification>
            <Notification>Electricity usage high</Notification>
            <Notification>Water usage high</Notification>
        </div>
    )
}

export default NotificationList;