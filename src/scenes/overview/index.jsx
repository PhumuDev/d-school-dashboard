import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import { tokens } from "../../theme";
import Green from '../../images/green.png';
import Water from '../../images/water.png';
import WaterElectricity from '../../images/Water & Electricity.png';
import InfoBox from "../../components/InfoBox";


const Overview = ({videoLink}) => {
    
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
        title = "Water & Electricity"
        subtitle = "Our solar panels allow us to harness clean electricity and our building's eco-friendly design promotes sustainable use of both electricity and water."
        icon = {WaterElectricity}
        className="InfoContainer2"
      />
      <div className="InfoContainer2">
        <iFrame 
        width="100%"
        height="auto"
        src={videoLink}
        frameBoarder="0"
        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="youtube"
        muted
        />

      </div>

      
  
    </div>

    </Box>;
    
    

  
    
};

export default Overview;