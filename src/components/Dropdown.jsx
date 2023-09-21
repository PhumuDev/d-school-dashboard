import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";
const Dropdown = () => {
    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" style={{color: colors.grey[100]}}>
                <Typography 
                variant ="h6"
                color={colors.grey[100]}
                fontWeight ="bold" 
                sx={{mb: "5px"}}
            >
                {props.children}
            </Typography>
            </a>
        );
        }
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <div className = "dropdown" style={{backgroundColor: colors.primary[400], border:"3px solid"+ colors.primary[500]}}>
            <Typography 
                variant ="h5"
                color={colors.grey[100]}
                fontWeight ="bold" 
                sx={{mb: "5px"}}

            >
                SETTINGS
            </Typography>
            <DropdownItem>CUSTOMISE</DropdownItem>
            <DropdownItem>GENERATE REPORT</DropdownItem>
            <DropdownItem>THEMES</DropdownItem>
        </div>
    )
}

export default Dropdown;