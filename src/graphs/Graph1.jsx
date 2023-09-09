import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";







// For sub heading 1 (Energy generation)

const Graph1 = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  

const [state, setState] = useState({
    series: [{
        name: 'Power',
        type: 'column',
        color: "#39de2c",
      // color: colors.primary[400],
        data: [30, 31, 32, 40, 41, 43, 56, 50, 44, 39, 32, 20]
      }, {
        name: 'Irradiance',
        type: 'line',
        color: "#f5c542",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        tooltip: {
          //Hover Box
          enabled: true,
          theme: "dark",
        },
        stroke: {
          width: [0, 4],
          curve: "smooth"
        },
        title: {
          text: 'Solar Panels Energy Generation',
         // color:colors.redAccent[100],
         style:{
          color: colors.grey[200],
          fontSize: 18,
          
         }
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'KW (The BAR Graph)',  // For power
          },
        
        }, {
          opposite: true,
          title: {
            text: 'W/m2(The LINE Graph)'  // For Irradiance
          }
        }]
      },
})
    
                  
       
      
      
      
    


  return( 
    <div class='diagramContainer2'>
        <ReactApexChart options={state.options} series={state.series} type="line" height={"100%"} width={"100%"}/>
        {/* <Typography color={colors.primary[100]}>Hello World</Typography> */}


    </div>
   )

  };
export default Graph1;

 

           