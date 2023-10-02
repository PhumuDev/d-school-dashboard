import { Box, Typography, useTheme } from "@mui/material";
import {tokens} from "../../../theme";
import { useState } from "react";
import Graph2 from "../../../graphs/Graph2";
import Graph3 from "../../../graphs/Graph3";
import Bolt from '../../../images/thunderbolt.png';
import InfoBox from "../../../components/InfoBox";
import Meter from '../../../images/speedometer.png'

const EnergyConsumption = ({isAdmin}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return <Box m="15px">
       {/* <Typography>Kevin</Typography>  */}

        <div className='MainContainer'>
            <div className="container1">
              <Graph2 isAdmin = {isAdmin}/>
              <Graph3 isAdmin = {isAdmin}/>
              
            </div>
          
          <div class = "MainStatsContainer">
            <InfoBox
              title = "35431kWh Consumed In August!"
              subtitle = "Most of our energy consumption comes from the chiller panel!"
              icon = {Bolt}
              className="statsContainer2"
            />
            <InfoBox
              title = "Consumption is Optimal"
              subtitle = "Energy Consumption is currently lower than the standard rate."
              icon = {Meter}
              className="statsContainer2"
            />
          </div>       
           
        </div>
    </Box>;
   
};

export default EnergyConsumption;