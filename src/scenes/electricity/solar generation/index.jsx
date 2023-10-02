import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import {tokens} from "../../../theme";
import Graph1 from "../../../graphs/Graph1";
import House from '../../../images/house.png';
import Solar from '../../../images/solar-panels.png';
import Sun from '../../../images/sun.png';
import InfoBox from "../../../components/InfoBox";

const SolarGeneration = ({isAdmin}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return <Box m="15px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        {/* <Header title="Electricity" subtitle=""/> */}
        </Box>

        <div className='MainContainer'>
          <div className="container1">
            <Graph1 isAdmin = {isAdmin}/>
              
          </div>
          <div class = "MainStatsContainer" >

            <InfoBox
              title = "What Does kW Mean?"
              subtitle = "KW stands for kilowatt, which is a unit of power equivalent to 1000 joules of energy."
              icon = {Sun}
              className="statsContainer"
            />
            <InfoBox
              title = "155kWh/day Produced On Average!"
              subtitle = "40kWh is enough to run many electrical appliances in a 5 bedroom house for a day!"
              icon = {Solar}
              className="statsContainer"
            />      
            <InfoBox
              title = "4833kWh Generated This Month!"
              subtitle = "That's enough energy to supply 6 average households for a month!"
              icon = {House}
              className="statsContainer"
            />

          </div>
           
        </div>

    </Box>;
    
    

  
    
};

export default SolarGeneration;