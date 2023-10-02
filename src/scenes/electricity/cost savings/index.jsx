import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Graph2 from "../../../graphs/Graph2";
import Graph4 from "../../../graphs/Graph4";
import Graph5 from "../../../graphs/Graph5";
import Bulb from '../../../images/bulb.png';
import InfoBox from "../../../components/InfoBox";
import Money from "../../../images/money.png"

const CostSavings = ({isAdmin}) => {

    return <Box m="15px">
        {/* <Typography>Kevin(2)</Typography> */}


        <div className='MainContainer'>
            <div className="container1">
              <Graph4 isAdmin = {isAdmin}/>
              <Graph5 isAdmin = {isAdmin}/>
              
            </div>
          
          
          
          
            <div class = "MainStatsContainer">
            <InfoBox
              title = "R4938 Saved This Month!"
              subtitle = "Electricity generated from our solar panels saved R4938 in utilities!"
              icon = {Money}
              className="statsContainer2"
            />
            <InfoBox
              title = "Our Building Design Saves Electricity!"
              subtitle = "Our building is designed to reduce electricity consumption. For example, the use of external screens reduces the need for air conditioning."
              icon = {Bulb}
              className="statsContainer2"
            />
          </div>        
           
        </div>

    </Box>;
   
};

export default CostSavings;