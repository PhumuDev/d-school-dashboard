import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";




// COST SAVINGS

const Graph5 = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

const [state, setState] = useState({
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        title: {
            text: 'Cost if Bought from Eskom ????',
            style:{
              color: colors.grey[200],
              fontSize: 18,
              
             }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)',
            style:{
              color: colors.grey[200],
              fontSize: 12,
              
             }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
})
    
                  
       
      
      
      
    


  return( 
    <div class='diagramContainer'>
        <ReactApexChart options={state.options} series={state.series} type="bar" height={"100%"} width={"100%"}/>



    </div>
   )

  };
export default Graph5;

 

           