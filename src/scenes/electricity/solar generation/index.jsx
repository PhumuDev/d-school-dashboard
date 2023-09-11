import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import {tokens} from "../../../theme";
import Graph1 from "../../../graphs/Graph1";
import Bulb from '../../../images/bulb.png';
import InfoBox from "../../../components/InfoBox";

const SolarGeneration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return <Box m="15px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        {/* <Header title="Electricity" subtitle=""/> */}
        </Box>

        <div className='MainContainer'>
          <div className="container1">
            <Graph1/>
              
          </div>
          <div class = "MainStatsContainer" >

            <InfoBox
              title = "3000KWs Generated Today!"
              subtitle = "We've generated enough electricity to power 6 houses!"
              icon = {Bulb}
              className="statsContainer"
            />      
            <InfoBox
              title = "3000KWs Generated Today!"
              subtitle = "We've generated enough electricity to power 6 houses!"
              icon = {Bulb}
              className="statsContainer"
            />
            
            <InfoBox
              title = "3000KWs Generated Today!"
              subtitle = "We've generated enough electricity to power 6 houses!"
              icon = {Bulb}
              className="statsContainer"
            />
            
          </div>
           
        </div>

    </Box>;
    
    

  
    
};

export default SolarGeneration;