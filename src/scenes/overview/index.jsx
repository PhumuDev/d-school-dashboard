import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import { tokens } from "../../theme";
import Green from '../../images/green.png';
import Water from '../../images/water.png';
import Bulb from '../../images/bulb.png';


const Overview = () => {
    
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">

    {/* Image Banner */}
    <div class = "ImageContainer"> 
      
      <h1 class = "Heading">Welcome</h1>
      <p1 class = "Subheading">To The Hasso Plattner d-School Afrika.</p1>
      

    </div>
      
    <div class = "InfoContainer">

      <div class = "InfoContainer2" style={{backgroundColor: colors.primary[400]}}>
        <img src = {Green} alt = "Image of planet" class = "InfoImage"/>
        <Typography 
          variant='h3'
          fontWeight= 'bold'
          margin='10px 20px 0px 20px'
          color = {colors.grey[100]}
        >
          We Are Green!
        </Typography>
        <Typography
          variant = 'h6'
          margin='10px 30px'
          color = {colors.grey[200]}
        >
          In all possible aspects, our building is sustainable and engineered for maximum comfort and functionality, with minimal reliance upon the national grid.
        </Typography>
      </div>

      <div class = "InfoContainer2" style={{backgroundColor: colors.primary[400]}}>
        <img src = {Water} alt = "Image of water" class = "InfoImage"/>
        <Typography 
          variant='h3'
          fontWeight= 'bold'
          margin='10px 20px 0px 20px'
          color = {colors.grey[100]}
        >
          Water Usage
        </Typography>
        <Typography
          variant = 'h6'
          margin='10px 30px'
          color = {colors.grey[200]}
        >
          With systems such as water metering and rainwater storage and reuse, we are committed to efficient and sustainable water usage.
        </Typography>
      </div>
        
      <div class = "InfoContainer2" style={{backgroundColor: colors.primary[400]}}>
        <img src = {Bulb} alt = "Image of bulb" class = "InfoImage"/>
        <Typography 
          variant='h3'
          fontWeight= 'bold'
          margin='10px 20px 0px 20px'
          color = {colors.grey[100]}
        >
          Electricity Usage
        </Typography>
        <Typography
          variant = 'h6'
          margin='10px 30px'
          color = {colors.grey[200]}
        >
          Our building's solar panel system, combined with its eco-friendly design, enables us to harness electricity sustainably and use it with optimal efficiency.
        </Typography>
      </div>
  
    </div>

    </Box>;
    
    

  
    
};

export default Overview;