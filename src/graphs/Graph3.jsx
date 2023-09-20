import React, { useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';



const Graph3 = () => {
 // const [options, setObject] = useState({
    const [state, setState] = useState({
      series:
      [{
        name: 'Series 1',
        data: [
          [new Date('2023-09-01').getTime(), 12],
          [new Date('2023-09-02').getTime(), 18],
          [new Date('2023-09-03').getTime(), 22],
          [new Date('2023-09-04').getTime(), 15],
          [new Date('2023-09-05').getTime(), 16],
          [new Date('2023-09-06').getTime(), 17],
          [new Date('2023-09-07').getTime(), 18],
          [new Date('2023-09-08').getTime(), 25],
          [new Date('2023-09-09').getTime(), 31],
          [new Date('2023-09-10').getTime(), 20],
          [new Date('2023-09-11').getTime(), 10],
        ],
    }],

    options:{
    chart: {
      id: 'line-datetime',
      type: 'line',
      height: 350,
      zoom: {
        autoScaleYaxis: true
      }
    },
    xaxis: {
      type: 'datetime',
      min: new Date('2023-09-01').getTime(),
      tickAmount: 6,
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
  
  },
    
  selection: 'one_year',
})



// Define the updateData function
const updateData = (timeline) => {
  setState({
    ...state,
    selection: timeline,
  });


    switch (timeline) {
      case 'one_month':
        ApexCharts.exec(
          'line-datetime',
          'zoomX',
          new Date('2023-09-01').getTime(),
          new Date('2023-09-03').getTime()
        )
        break
      case 'six_months':
        ApexCharts.exec(
          'line-datetime',
          'zoomX',
          new Date('2023-09-01').getTime(),
          new Date('2023-09-05').getTime()
        )
        break
      case 'one_year':
        ApexCharts.exec(
          'line-datetime',
          'zoomX',
          new Date('2023-09-01').getTime(),
          new Date('2023-09-07').getTime()
        )
        break
      case 'ytd':
        ApexCharts.exec(
          'line-datetime',
          'zoomX',
          new Date('2023-09-01').getTime(),
          new Date('2023-09-10').getTime()
        )
        break
      case 'all':
        ApexCharts.exec(
          'line-datetime',
          'zoomX',
          new Date('2023-09-01').getTime(),
          new Date('2023-09-11').getTime()
        )
        break
      default:
    }
  }
  





  return( 
          
  <div class='diagramContainer'>
     <div class="toolbar">
          <button id="one_month"
              
              onClick={()=>updateData('one_month')} className={ (state.selection==='one_month' ? 'active' : '')}>
            1M
            
          </button>
          &nbsp;
          <button id="six_months"
              
              onClick={()=>updateData('six_months')} className={ (state.selection==='six_months' ? 'active' : '')}>
            6M
          </button>
          &nbsp;
          <button id="one_year"
              
              
              onClick={()=>updateData('one_year')} className={ (state.selection==='one_year' ? 'active' : '')}>
            1Y
          </button>
          &nbsp;
          <button id="ytd"
              
              onClick={()=>updateData('ytd')} className={ (state.selection==='ytd' ? 'active' : '')}>
            YTD
          </button>
          &nbsp;
          <button id="all"
              
              onClick={()=>updateData('all')} className={ (state.selection==='all' ? 'active' : '')}>
            ALL
          </button>
     </div>
   
             <ReactApexChart
               options={state.options}
               series={state.series}
               type="line"
               height={"100%"} 
               width={"100%"}
             />     
    
  </div>
  )
    
};
export default Graph3;
