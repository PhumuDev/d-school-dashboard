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
      {"x": "Ground",         "y": 602},
      {"x": "First Floor",    "y": 507},
      {"x": "Second Floor",   "y": 3694},
     
  ],
},
{
"date": "2023-08-02",
"data": [
    {"x": "Ground",         "y": 320},
    {"x": "First Floor",    "y": 285},
    {"x": "Second Floor",   "y": 3635},
   
],
},
{
"date": "2023-08-03",
"data": [
    {"x": "Ground",         "y": 763},
    {"x": "First Floor",    "y": 407},
    {"x": "Second Floor",   "y": 3792},
   
],
},
{
"date": "2023-08-04",
"data": [
    {"x": "Ground",         "y": 172},
    {"x": "First Floor",    "y": 97},
    {"x": "Second Floor",   "y": 2136},
   
],
},
{
"date": "2023-08-05",
"data": [
    {"x": "Ground",         "y": 49},
    {"x": "First Floor",    "y": 68},
    {"x": "Second Floor",   "y": 2},
   
],
},
{
"date": "2023-08-06",
"data": [
    {"x": "Ground",         "y": 235},
    {"x": "First Floor",    "y": 157},
    {"x": "Second Floor",   "y": 118},
   
],
},
{
"date": "2023-08-07",
"data": [
    {"x": "Ground",         "y": 1564},
    {"x": "First Floor",    "y": 665},
    {"x": "Second Floor",   "y": 348},
   
],
},
{
"date": "2023-08-08",
"data": [
    {"x": "Ground",         "y": 1441},
    {"x": "First Floor",    "y": 825},
    {"x": "Second Floor",   "y": 1930},
   
],
},
{
"date": "2023-08-09",
"data": [
    {"x": "Ground",         "y": 37},
    {"x": "First Floor",    "y": 13},
    {"x": "Second Floor",   "y": 3505},
   
],
},
{
"date": "2023-08-10",
"data": [
    {"x": "Ground",         "y": 156},
    {"x": "First Floor",    "y": 313},
    {"x": "Second Floor",   "y": 187},
   
],
},
{
"date": "2023-08-11",
"data": [
    {"x": "Ground",         "y": 453},
    {"x": "First Floor",    "y": 320},
    {"x": "Second Floor",   "y": 3537},
   
],
},
{
"date": "2023-08-12",
"data": [
    {"x": "Ground",         "y": 27},
    {"x": "First Floor",    "y": 118},
    {"x": "Second Floor",   "y": 3427},
   
],
},
{
"date": "2023-08-13",
"data": [
    {"x": "Ground",         "y": 69},
    {"x": "First Floor",    "y": 118},
    {"x": "Second Floor",   "y": 2596},
   
],
},
{
"date": "2023-08-14",
"data": [
    {"x": "Ground",         "y": 1016},
    {"x": "First Floor",    "y": 532},
    {"x": "Second Floor",   "y": 642},
   
],
},
{
"date": "2023-08-15",
"data": [
    {"x": "Ground",         "y": 1305},
    {"x": "First Floor",    "y": 688},
    {"x": "Second Floor",   "y": 4115},
   
],
},
{
"date": "2023-08-16",
"data": [
    {"x": "Ground",         "y": 994},
    {"x": "First Floor",    "y": 611},
    {"x": "Second Floor",   "y": 3949},
   
],
},
{
"date": "2023-08-17",
"data": [
    {"x": "Ground",         "y": 593},
    {"x": "First Floor",    "y": 560},
    {"x": "Second Floor",   "y": 4052},
   
],
},
{
"date": "2023-08-18",
"data": [
    {"x": "Ground",         "y": 508},
    {"x": "First Floor",    "y": 400},
    {"x": "Second Floor",   "y": 2441},
   
],
},
{
"date": "2023-08-19",
"data": [
    {"x": "Ground",         "y": 787},
    {"x": "First Floor",    "y": 150},
    {"x": "Second Floor",   "y": 201},
   
],
},
{
"date": "2023-08-20",
"data": [
    {"x": "Ground",         "y": 165},
    {"x": "First Floor",    "y": 191},
    {"x": "Second Floor",   "y": 690},
   
],
},
{
"date": "2023-08-21",
"data": [
    {"x": "Ground",         "y": 993},
    {"x": "First Floor",    "y": 686},
    {"x": "Second Floor",   "y": 1148},
   
],
},
{
"date": "2023-08-22",
"data": [
    {"x": "Ground",         "y": 675},
    {"x": "First Floor",    "y": 477},
    {"x": "Second Floor",   "y": 3766},
   
],
},
{
"date": "2023-08-23",
"data": [
    {"x": "Ground",         "y": 585},
    {"x": "First Floor",    "y": 489},
    {"x": "Second Floor",   "y": 821},
   
],
},
{
"date": "2023-08-24",
"data": [
    {"x": "Ground",         "y": 1405},
    {"x": "First Floor",    "y": 3044},
    {"x": "Second Floor",   "y": 495},
   
],
},
{
"date": "2023-08-25",
"data": [
    {"x": "Ground",         "y": 1187},
    {"x": "First Floor",    "y": 3714},
    {"x": "Second Floor",   "y": 309},
   
],
},
{
"date": "2023-08-26",
"data": [
    {"x": "Ground",         "y": 1338},
    {"x": "First Floor",    "y": 2158},
    {"x": "Second Floor",   "y": 202},
   
],
},
{
"date": "2023-08-27",
"data": [
    {"x": "Ground",         "y": 35},
    {"x": "First Floor",    "y": 214},
    {"x": "Second Floor",   "y": 207},
   
],
},
{
"date": "2023-08-28",
"data": [
    {"x": "Ground",         "y": 869},
    {"x": "First Floor",    "y": 641},
    {"x": "Second Floor",   "y": 1044},
   
],
},
{
"date": "2023-08-29",
"data": [
    {"x": "Ground",         "y": 835},
    {"x": "First Floor",    "y": 2991},
    {"x": "Second Floor",   "y": 1471},
   
],
},
{
"date": "2023-08-30",
"data": [
    {"x": "Ground",         "y": 1078},
    {"x": "First Floor",    "y": 1017},
    {"x": "Second Floor",   "y": 889},
   
],
},
{
"date": "2023-08-31",
"data": [
    {"x": "Ground",         "y": 1041},
    {"x": "First Floor",    "y": 1178},
    {"x": "Second Floor",   "y": 962},
   
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

 

           