import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import { tokens } from "../../theme";
import Green from '../../images/green.png';
import Water from '../../images/water.png';
import Bulb from '../../images/bulb.png';
import InfoBox from "../../components/InfoBox";


const Overview = () => {
    
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="15px">

    {/* Image Banner */}
    <div class = "ImageContainer"> 
      
      <h1 class = "Heading">Welcome</h1>
      <p1 class = "Subheading">To The Hasso Plattner d-School Afrika.</p1>
      

    </div>
      
    <div class = "InfoContainer">

      <InfoBox
        title = "We Are Green!"
        subtitle = "In all possible aspects, our building is sustainable and engineered for maximum comfort and functionality, with minimal reliance upon the national grid."
        icon = {Green}
        className="InfoContainer2"
      />
      <InfoBox
        title = "Electricity Usage"
        subtitle = "Our building's solar panel system, combined with its eco-friendly design, enables us to harness electricity sustainably and use it with optimal efficiency."
        icon = {Bulb}
        className="InfoContainer2"
      />
      <div className="InfoContainer2" style={{backgroundColor: colors.primary[400]}}>
      <Typography 
                variant='h4'
                fontWeight= 'bold'
                margin='10px 20px 0px 20px'
                color = {colors.grey[100]}
            >
                Drone Footage HPI Design School

            </Typography>
        <iFrame 
        width="90%"
        height="auto"
        src={'https://www.youtube.com/embed/maoRIcOf1jk'}
        frameBoarder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="youtube"
        />

      </div>
      
      {/*<InfoBox
        title = "Water Usage"
        subtitle = "With systems such as water metering and rainwater storage and reuse, we are committed to efficient and sustainable water usage."
        icon = {Water}
        className="InfoContainer2"
/>*/}

      
  
    </div>

    </Box>;
    
    

  
    
};

export default Overview;