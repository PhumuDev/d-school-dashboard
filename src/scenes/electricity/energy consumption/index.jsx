import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Graph2 from "../../../graphs/Graph2";

const EnergyConsumption = () => {

    return <Box m="20px">
       {/* <Typography>Kevin</Typography>  */}

        <div className='MainContainer'>
            <div className="container1">
              <Graph2/>
              
            </div>
          
          
          
          
          <div class = "statsContainer">
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

export default EnergyConsumption;