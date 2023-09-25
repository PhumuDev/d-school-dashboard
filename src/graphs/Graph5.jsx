import React, { useEffect, useState, useRef} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';






// For Sub heading 3 Cost Savings

const Graph5 = () => {

  const chartRef = useRef(null);
  const numDisplayPoints = 8;
  const [displayedData, setDisplayedData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [dataHistory, setDataHistory] = useState([]);
  const [isPaused, setIsPaused] = useState(false);


  const [options, setOptions] = useState({
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
            return  ("R "+val)
          }
        }
      },
      yaxis: {
        title: {
          text: 'Rands (R)',
          align: "center",
          style:{
            color: "#abaaa7",
            fontSize: 14,
            
           }
        }
      
      },
      title: {
          text: 'Cost of Water Usage',
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
      name: 'water cost',
      data: []
    }

  ])
  const updateChart = (newData) => {
    // Update series data
    const updatedSeries = [
      {
        ...series[0],
        data: newData.map((item) => item.value),
      },
      // Other series...
    ];

    // Update x-axis categories with formatted date strings
    const updatedOptions = {
      ...options,
      xaxis: {
        ...options.xaxis,
        categories: newData.map((item) => {const date = new Date(item.x);
          // Format the date as "dd MMM" (adjust the format as needed)
          return `${date.getDate()} ${date.toLocaleString("default", {
            month: "short",
          })}`;
        }),
      },
    };

    // Set the updated series and options
    setSeries(updatedSeries);
    setOptions(updatedOptions);
  };

  const fetchData = async () => {try {
    const response = await fetch("/waterUsageCost");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    // Parse the date strings into JavaScript Date objects
    const parsedData = data.map((item) => ({
      x: new Date(item.x),
      value: item.value,
    }));

    setDataHistory([...dataHistory, ...parsedData]);

    // Check if all data is fetched
    if (dataHistory.length === parsedData.length) {// Initial chart update with the first 8 data points
      updateChart(dataHistory.slice(0, numDisplayPoints));
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  // Fetch data initially
  fetchData();

  // Fetch data every 10 minutes
  const fetchInterval = setInterval(fetchData, 2 * 60 * 1000);

  // Cleanup: clear the interval when the component unmounts
  return () => clearInterval(fetchInterval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    if (dataIndex < dataHistory.length && !isPaused) {
      const nextDataPoint = dataHistory[dataIndex];
      const newDisplayedData = [...displayedData, nextDataPoint].slice(-numDisplayPoints);

      setDisplayedData(newDisplayedData);
      setDataIndex((prevIndex) => prevIndex + 1);

      // Update the chart with the new data
      updateChart(newDisplayedData);
    }
  }, 5000);
// Cleanup: clear the interval when the component unmounts
return () => clearInterval(interval);
}, [dataIndex, displayedData, numDisplayPoints, dataHistory, isPaused]);



const displayFirst7Points = () => {
  setIsPaused(true);
  // Display the first 7 data points
  updateChart(dataHistory.slice(0, 7));
};

const displayWeek2Points = () => {
  setIsPaused(true);
  // Display the first 10 data points
  updateChart(dataHistory.slice(8, 14));
};

const displayMonthPoints = () => {
  setIsPaused(true);
  // Display the first 7 data points
  updateChart(dataHistory.slice(0, 30));
};

const resumeUpdates = () => {
  setIsPaused(false);
};

  

  return( 
    <div class='diagramContainer'>
      <div>
      <button onClick={resumeUpdates}>Live</button>
        <button onClick={displayFirst7Points}>W1</button>
        <button onClick={displayWeek2Points}>W2</button>
        <button onClick={displayMonthPoints}>1M</button>
      </div>
      {/* {chartData && chartData?.series && ( */}
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={"100%"} 
          width={"100%"}
          ref={chartRef}
        />
      {/* )} */}


        {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={"100%"} width={"100%"}/> */}


 

    </div>
   )

  };
export default Graph5;

