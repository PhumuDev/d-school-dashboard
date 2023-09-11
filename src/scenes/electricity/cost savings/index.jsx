import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Graph2 from "../../../graphs/Graph2";
import Graph4 from "../../../graphs/Graph4";
import Graph5 from "../../../graphs/Graph5";

const CostSavings = () => {

    return <Box m="15px">
        {/* <Typography>Kevin(2)</Typography> */}


        <div className='MainContainer'>
            <div className="container1">
              <Graph4/>
              <Graph5/>
              
            </div>
          
          
          
          
          <div class = "MainStatsContainer">
            
          </div>       
           
        </div>

    </Box>;
   
};

export default CostSavings;