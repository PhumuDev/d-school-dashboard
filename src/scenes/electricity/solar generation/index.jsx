import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import {tokens} from "../../../theme";
import Graph1 from "../../../graphs/Graph1";
import Bulb from '../../../images/bulb.png';

const SolarGeneration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return <Box m="15px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        {/* <Header title="Electricity" subtitle=""/> */}
        </Box>

        <div className='MainContainer'>
          <div className="container1" style={{backgroundColor: colors.primary[400]}}>
            <Graph1/>
              
          </div>
          <div class = "MainStatsContainer" >
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

export default SolarGeneration;