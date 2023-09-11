import { Box, Typography, useTheme } from "@mui/material";
import {tokens} from "../../../theme";
import { useState } from "react";
import Graph2 from "../../../graphs/Graph2";
import Graph3 from "../../../graphs/Graph3";
import Bulb from '../../../images/bulb.png';
import InfoBox from "../../../components/InfoBox";

const EnergyConsumption = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return <Box m="15px">
       {/* <Typography>Kevin</Typography>  */}

        <div className='MainContainer'>
            <div className="container1">
              <Graph2/>
              <Graph3/>
              
            </div>
          
          <div class = "MainStatsContainer">
            <InfoBox
              title = "3000KWs Generated Today!"
              subtitle = "We've generated enough electricity to power 6 houses!"
              icon = {Bulb}
              className="statsContainer2"
            />
            <InfoBox
              title = "3000KWs Generated Today!"
              subtitle = "We've generated enough electricity to power 6 houses!"
              icon = {Bulb}
              className="statsContainer2"
            />
          </div>       
           
        </div>
    </Box>;
   
};

export default EnergyConsumption;