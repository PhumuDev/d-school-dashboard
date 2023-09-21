import React, { useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';






// For Sub heading 4 WATER USAGE

const Graph6 = () => {

  const [options, setObject] = useState({
      chart: {
        type: 'bar',
        foreColor: "#939695",
        
      },
      noData: {
        text: 'Loading...',
        style:{
        color: "#abaaa7",
        fontSize: "20"
      }
    },
      xaxis: {
        // title: {
        //   text: ""
        // },
        categories: [],
      },
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        //Hover Box
        enabled: true,
        theme: "dark",
        y: {
          formatter: function (val) {
            return  (val+" litres")
          }
        }
      },
      yaxis: {
        title: {
          text: 'litres (l)',
          style:{
            color: "#abaaa7",
            fontSize: 14,
            
           }
        }
      
      },
      title: {
          text: 'Water Usage Per Category',
          align: "center",
          style:{
            color: "#abaaa7",
            fontSize: 18,
            
           }
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
       response.data.category_usage.map(item => {
         console.log("item",item)
           xAxis.push(item.x)
           yAxis.push(item.y)
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
        name: 'Water Usage',
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
export default Graph6;

