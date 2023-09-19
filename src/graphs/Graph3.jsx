import React, { useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';






// For Sub heading 2 Energy Consumption

const Graph3 = () => {

  const [options, setObject] = useState({
      chart: {
        type: 'line',
        height: 350
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
            return  (val + " Kw\\h")
          }
        }
      },
      yaxis: {
        title: {
          text: 'Kw\\h',
          style:{
            color: "#abaaa7",
            fontSize: 14,
            
           }
        }
      
      },
      title: {
          text: 'Standard Other Building Consumption',
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
      name: 'Profit',
      data: []
    }

  ])

  // const [dataa, setData] = useState({})
  
  useEffect(() =>{

    const xAxis = []
    const yAxis = []

     axios.get('/electricity')
    // .then(res => res.json())
    // .then(
    //   dataa => {
    //     setData(dataa)
    //     console.log("python",dataa)
    //   }
    // )
     .then(response => {
       console.log("response",response)
       response.data.energy_consumption.map(item => {
         console.log("item",item)
           xAxis.push(item.time)
           yAxis.push(item.load_power)
       })
       setObject({
         chart: {
           type: 'line',
           height: 350
         },
         xaxis: {
           categories: xAxis
         },
       })
       setSeries([
       {
        name: 'Solar Energy',
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
          type="line"
          height={"100%"} 
          width={"100%"}
        />
      {/* )} */}


        {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={"100%"} width={"100%"}/> */}


 

    </div>
   )

  };
export default Graph3;

