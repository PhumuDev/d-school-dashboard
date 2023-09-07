import { Box } from "@mui/material";
import Chart from "react-apexcharts";
import { useState } from "react";
import Graph6 from "../../../graphs/Graph6";
import Graph7 from "../../../graphs/Graph7";


const TotalWaterUsage = () => {
    
      
    return <Box m="20px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        {/* <Header title="Water" subtitle=""/> */}
        </Box>

        <div className='MainContainer'>
              
          <div className='container1'>
                  <Graph6/>
                  <Graph7/>
                  
          </div>

              
              
              
           
        </div>

    </Box>;
    
    

  
    
};

export default TotalWaterUsage;