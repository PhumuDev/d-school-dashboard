import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";




// WATER USAGE PER FLOOR

const Graph7 = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

const [state, setState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      title: {
        text: 'Water Usage Per Floor',
        style:{
          color: colors.grey[200],
          fontSize: 18,
          
         }
    },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  
  
})
    
                  
       


  return( 
    <div class='diagramContainer'>
        <ReactApexChart options={state.options} series={state.series} type="pie" height={"100%"} width={"100%"}/>



    </div>
   )

  };
export default Graph7;

 

           