import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import {tokens} from "../../theme";
import Graph1 from "../../graphs/Graph1";
import Graph2 from "../../graphs/Graph2";

const Electricity = () => {
  
    return <Box m="20px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        {/* <Header title="Electricity" subtitle=""/> */}
        </Box>

        
        <div className='MainContainer'>

          <div className='container1'>
            <Graph1/>
            <Graph2/>
          </div>
            
          {/*----------------- 
          <div className='container1'>
            <div class='diagramContainer'>
              <Chart class='charts'
              options={state.optionss}
              series={state.series}
              type="line"
              width="90%"
              height="100%"
            /> 
            </div> 
            
            <div class='diagramContainer'>
              <Chart class='charts'
              options={state.options}
              series={state.series}
              type="bar"
              width="90%"
              height="100%"
            /> 
            </div>
          </div> 
          
           ----------------- */}
          
           

          <div 
          class = "statsContainer">
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

export default Electricity;