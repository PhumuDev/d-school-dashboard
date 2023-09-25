import { Box } from "@mui/material";
import Chart from "react-apexcharts";
import { useState } from "react";
import Graph6 from "../../../graphs/Graph6";
import Graph7 from "../../../graphs/Graph7";
import Water from '../../../images/water.png';
import WaterF from '../../../images/water-faucet.png';
import Toilet from '../../../images/toilets.png';
import InfoBox from "../../../components/InfoBox";


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
          <div class = "MainStatsContainer" >

            <InfoBox
              title = "We Store Rainwater!"
              subtitle = "Rainwater is collected and used for toilet flushing!"
              icon = {Water}
              className="statsContainer"
            />      
            <InfoBox
              title = "101kl Of Water Used This Month!"
              subtitle = "Most water consumption comes from the building's toilets!"
              icon = {WaterF}
              className="statsContainer"
            />
            
            <InfoBox
              title = "Water Efficient Plumbing."
              subtitle = "All toilet fixtures use plumbing fittings with lower flow rates to cut down on water usage!"
              icon = {Toilet}
              className="statsContainer"
            />
            
          </div>
        </div>
    </Box>;
};

export default TotalWaterUsage;