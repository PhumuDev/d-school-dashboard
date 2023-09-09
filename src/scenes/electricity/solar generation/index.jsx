import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import {tokens} from "../../../theme";
import Graph1 from "../../../graphs/Graph1";


const SolarGeneration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        {/* <Header title="Electricity" subtitle=""/> */}
        </Box>

        <div className='MainContainer'>
            <div className="container1" style={{backgroundColor: colors.primary[400]}}>
              <Graph1/>
              
            </div>
          
          
          
          
          <div class = "statsContainer" style={{backgroundColor: colors.primary[400]}} >
            <div 
              class= "imagePlaceholder"
            >
            </div>
            <Typography 
            class = "statsHeading" 
            variant = "h2" 
            >3000KWs Generated Today!</Typography>
            <Typography class = "statsContent">We've generated enough electricity to power 6 houses!</Typography>
          </div>       
           
        </div>

    </Box>;
    
    

  
    
};

export default SolarGeneration;