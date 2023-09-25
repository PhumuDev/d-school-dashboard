import React, { useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';

const staticData = [
  {
      "date": "2023-08-01",
      "data": [
          {"x": "Toilets", "y": 988},
          {"x": "Hot Water", "y": 0},
          {"x": "Cold Water", "y": 147},
          {"x": "Washing", "y": 150},
      ],
  },
  {
      "date": "2023-08-02",
      "data": [
          {"x": "Toilets", "y": 5},
          {"x": "Hot Water", "y": 10},
          {"x": "Cold Water", "y": 15},
          {"x": "Washing", "y": 20},
      ],
  },
   {
      "date": "2023-08-03",
      "data": [
          {"x": "Toilets", "y": 9},
          {"x": "Hot Water", "y": 22},
          {"x": "Cold Water", "y": 13},
          {"x": "Washing", "y": 3},
      ],
  },
]

// WATER USAGE PER FLOOR

const Graph7 = () => {

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentChartData, setCurrentChartData] = useState([]);

 



useEffect(() => {
  if (currentDataIndex < staticData.length) {
    // Set a timer to update the chart data for each date
    const timer = setTimeout(() => {
      const dataForDate = staticData[currentDataIndex].data;
      setCurrentChartData(dataForDate);
      setCurrentDataIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Adjust the timer duration as needed (2 seconds in this example)

    return () => clearTimeout(timer);
  }
}, [currentDataIndex]);


const series = currentChartData.map((item) => item.y);


const [options, setOptions] = useState({
    
      chart: {
        width: 380,
        type: 'pie',
        foreColor: "#939695",
      },
      
      title: {
        text: 'Water Usage Per Floor',
        style:{
          color: "#abaaa7",
          fontSize: 18,
          
         }
    },
    labels: currentChartData.map((item) => item.x),
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
    })
   
 
                  
       


  return( 
    <div class='diagramContainer'>
        <ReactApexChart 
        options={options} 
        series={series} 
        type="pie" 
        height={"100%"} 
        width={"100%"}/>



    </div>
   )

  };
export default Graph7;

 

           