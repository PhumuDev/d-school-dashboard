import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";
import {tokens} from "../../theme";

const Electricity = () => {
    const [state, setState] = useState(
        {
          // Chart 1
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
                categories: [5, 8, 12, 15, 18]
            }
          },

          optionss: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          },

          series: [
            {
              name: "Power",
              data: [0, 0.85, 35.95, 28.06, 0.05]
            },
            {
                name: "Irradiance",
                data: [0, 93.56, 741.61, 635.05, 12.20]
              },
          ]
        }
      );
    return <Box m="20px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        {/* <Header title="Electricity" subtitle=""/> */}
        </Box>

        <div className='MainContainer'>
              
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