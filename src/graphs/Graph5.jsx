import React, { useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';






// For Sub heading 3 Cost Savings

const Graph5 = () => {

  const [options, setObject] = useState({
      chart: {
        type: 'bar',
        
      },
      noData: {
        text: 'Loading...',
        style:{
        color: "#abaaa7",
        fontSize: "20"
      }
    },
      xaxis: {
        categories: [],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        //Hover Box
        enabled: true,
        theme: "dark",
        y: {
          formatter: function (val) {
            return  ("R "+val)
          }
        }
      },
      yaxis: {
        title: {
          text: 'Rands (R)',
          style:{
            color: "#abaaa7",
            fontSize: 14,
            
           }
        }
      
      },
      title: {
          text: 'Cost of Water Usage',
          style:{
            color: "#abaaa7",
            fontSize: 18,
            
           }
      },
      dataLabels: {
        enabled: true
      },
     
      legend: {
        show: true
      }
    
  })

  const [series, setSeries] = useState([
    
    {
      name: 'water cost',
      data: []
    }

  ])

  // const [dataa, setData] = useState({})
  
  useEffect(() =>{

    const xAxis = []
    const yAxis = []

     axios.get('/water')
    // .then(res => res.json())
    // .then(
    //   dataa => {
    //     setData(dataa)
    //     console.log("python",dataa)
    //   }
    // )
     .then(response => {
       console.log("response",response)
       response.data.floor_usage.map(item => {
         console.log("item",item)
           xAxis.push(item.x)
           yAxis.push(item.water_cost)
       })
       setObject({
         chart: {
           type: 'bar',
           height: 350
         },
         xaxis: {
           categories: xAxis
         },
       })
       setSeries([
       {
        name: 'Water Cost',
        data: yAxis
      },
      ])
       console.log("stats",xAxis,yAxis)
     }).catch(e => {
       alert(e);
     })
    
  
  }, [])
   
      
      
      
    


  return( 
    <div class='diagramContainer'>

      {/* {chartData && chartData?.series && ( */}
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={"100%"} 
          width={"100%"}
        />
      {/* )} */}


        {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={"100%"} width={"100%"}/> */}


 

    </div>
   )

  };
export default Graph5;

