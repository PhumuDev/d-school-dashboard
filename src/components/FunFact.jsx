import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import questionMark from "../images/question-mark.png";
import {tokens} from "../theme";
const FunFact = ({subtext}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box 
            display="flex"
            alignItems="center"
            className = "funFact" 
            style={{
            backgroundColor: colors.primary[400], 
            border:"3px solid"+ colors.primary[500], 
            display: "flex"}}>
            <img src={questionMark} height="25px" width="auto"  display="flex" />
            <Box>
            <Typography 
                variant ="h5"
                color={colors.grey[100]}
                fontWeight ="bold" 
                sx={{mb: "5px"}}
                textAlign="center"

            >
                Did You Know?
            </Typography>
            <Typography 
                variant ="h6"
                color={colors.grey[100]}
                fontWeight ="bold" 
                sx={{mb: "5px"}}
                textAlign="center"

            >
                {subtext}
            </Typography>
            </Box>
            
        </Box>
    )
}

export default FunFact;