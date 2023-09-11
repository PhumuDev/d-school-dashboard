import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";

const InfoBox = ({title, subtitle, icon, className}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box class = {className} style={{backgroundColor: colors.primary[400]}}>
            <img src = {icon} class = "InfoImage"/>
            <Typography 
                variant='h4'
                fontWeight= 'bold'
                margin='10px 20px 0px 20px'
                color = {colors.grey[100]}
            >
                {title}
            </Typography>

            <Typography
                variant = 'h6'
                margin='10px 30px'
                color = {colors.grey[200]}
            >
                {subtitle}
            </Typography>
        </Box>
    );
};

export default InfoBox;

 
                 
                
                