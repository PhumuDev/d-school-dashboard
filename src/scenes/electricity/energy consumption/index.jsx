import { Box, Typography, useTheme } from "@mui/material";
import {tokens} from "../../../theme";
import { useState } from "react";
import Graph2 from "../../../graphs/Graph2";
import Graph3 from "../../../graphs/Graph3";
import Bulb from '../../../images/bulb.png';

const EnergyConsumption = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return <Box m="15px">
       {/* <Typography>Kevin</Typography>  */}

        <div className='MainContainer'>
            <div className="container1">
              <Graph2/>
              <Graph3/>
              
            </div>
          
          <div class = "MainStatsContainer">
            <div class = "statsContainer" style={{backgroundColor: colors.primary[400]}} >
              <img src = {Bulb} alt = "Image of bulb" class = "InfoImage"/>
              <Typography 
                variant='h3'
                fontWeight= 'bold'
                margin='10px 20px 0px 20px'
                color = {colors.grey[100]}
              >
                3000KWs Generated Today!
              </Typography>
              <Typography 
                variant = 'h6'
                margin='10px 30px'
                color = {colors.grey[200]}
              >
                We've generated enough electricity to power 6 houses!
              </Typography>
            </div>      
            <div class = "statsContainer" style={{backgroundColor: colors.primary[400]}} >
              <img src = {Bulb} alt = "Image of bulb" class = "InfoImage"/>
              <Typography 
                variant='h3'
                fontWeight= 'bold'
                margin='10px 20px 0px 20px'
                color = {colors.grey[100]}
              >
                3000KWs Generated Today!
              </Typography>
              <Typography 
                variant = 'h6'
                margin='10px 30px'
                color = {colors.grey[200]}
              >
                We've generated enough electricity to power 6 houses!
              </Typography>
            </div> 
            <div class = "statsContainer" style={{backgroundColor: colors.primary[400]}} >
              <img src = {Bulb} alt = "Image of bulb" class = "InfoImage"/>
              <Typography 
                variant='h3'
                fontWeight= 'bold'
                margin='10px 20px 0px 20px'
                color = {colors.grey[100]}
              >
                3000KWs Generated Today!
              </Typography>
              <Typography 
                variant = 'h6'
                margin='10px 30px'
                color = {colors.grey[200]}
              >
                We've generated enough electricity to power 6 houses!
              </Typography>
            </div> 
          </div>       
           
        </div>
    </Box>;
   
};

export default EnergyConsumption;