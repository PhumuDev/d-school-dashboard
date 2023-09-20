import React, { useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';






// For Sub heading 2 Energy Consumption

const Graph2 = () => {

  const [options, setObject] = useState({
      chart: {
        type: 'bar',
        height: 350,
        foreColor: "#939695",
       // background: "#e8ebea"
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
        opacity: 1,
        colors: "#db352c"
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
          text: 'KW/h',
          style:{
            color: "#abaaa7",
            fontSize: 14,
            
           }
        }
      }, plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      title: {
          text: 'Building Energy Consumption',
          align: "center",
          style:{
            color: "#abaaa7",
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
      legend: {
        show: true
      }
    
  })

  const [series, setSeries] = useState([
    {
      name: 'Energy',
      data: []
    },
    

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
           type: 'bar',
           height: 350
         },
         xaxis: {
           
           categories: xAxis
         },
       })
       setSeries([
       {
         name: 'Energy',
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
export default Graph2;
