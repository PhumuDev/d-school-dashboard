import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";

const Login = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <div class = "login" style={{backgroundColor: colors.primary[400], border:"3px solid"+ colors.primary[500]}}>
            <Typography 
                variant ="h5"
                color={colors.grey[100]}
                fontWeight ="bold" 
                sx={{mb: "5px"}}
            >
                Login
            </Typography>
            
        </div>
    )
}

export default Login;