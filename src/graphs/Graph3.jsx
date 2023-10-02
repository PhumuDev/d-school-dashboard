
import React, { useEffect, useState, useRef} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";
import axios from 'axios';
import { BorderAll } from "@mui/icons-material";






// For Sub heading 2 Energy Consumptionn

const Graph3 = ({isAdmin}) => {
   
  const chartRef = useRef(null);
  const [dataHistory, setDataHistory] = useState([]);


  const [options, setOptions] = useState({
      chart: {
        type: 'line',
        height: 350,
        foreColor: "#939695",
       // background: "#e8ebea"
       toolbar:{
        show: false
       }
      },
      
      noData: {
          text: 'Loading...',
          style:{
          color: "#abaaa7",
          fontSize: "20"
        }
      },
    
      tooltip: {
        //Hover Box
        enabled: true,
        theme: "dark",
        y: {
          formatter: function (val) {
            return  (val + " Kw/h")
          }
        }
      },
      yaxis: {
        title: {
          text: 'kW/h',
          style:{
            color: "#abaaa7",
            fontSize: 14,
            
           }
        }
      },
      
      title: {
          text: 'Building Consumption vs Standard Rate',
          align: "center",
          style:{
            color: "#abaaa7",
            fontSize: 18,
           }
      },
      dataLabels: {
        enabled: false
      },
     
      
      legend: {
        show: true
      }
    
  })

  const [series, setSeries] = useState([
    {
      name: "Energy Consumption",
      data: [], // Initially empty
      color: "#6ded68"
    },
   
  ]);

  // Constant Series
  const [constantSeries, setConstantSeries] = useState([
    {
      name: "Standard Energy Rate",
      data: Array.from({ length: 8 }, () => 1200), // Array with 30 elements, each set to 1200
      color: "#e02424"
    },
  ]);

  const [isLive, setIsLive] = useState(true); //Controls which API data is fetched from
  const [apiRoute, setApiRoute] = useState("/solarGenerationLive"); //Controls which API data is fetched from
  const [isPaused, setIsPaused] = useState(false); //Controls the fetching of data

  const updateChart = (newData) => {
    // Update series data
    const updatedSeries = [
      {
        ...series[0],
        data: newData.map((item) => item.consumptionValue),
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

    if (!isPaused){
      const response = await fetch(apiRoute);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      // Parse the date strings into JavaScript Date objects
      const parsedData = data.map((item) => ({
        x: new Date(item.x),
        consumptionValue: item.consumptionValue,
      }));

      setDataHistory(parsedData);
      updateChart(parsedData);
    }
    

    
  } catch (error) {
    console.error(error);
  }
  };


  useEffect(() => {

    // Function to update apiRoute based on isLive
    const updateApiRoute = () => {
      setApiRoute(isLive ? "/solarGeneration" : "/solarGenerationLive");
    };

    // Update apiRoute whenever isLive changes
    updateApiRoute();

    // Fetch data initially
    if (!isPaused){
      fetchData();
    }

    // Fetch data every 3 seconds
    const fetchInterval = setInterval(fetchData, 3000);

    // Cleanup: clear the interval when the component unmounts
    return () => clearInterval(fetchInterval);

  }, [isLive, isPaused]);


  const displayFirst7Points = () => {
    setIsPaused(true);
    // Display the first 7 data points
    updateChart(dataHistory.slice(0, 7));
    setConstantSeries([
      {
        name: "Standard Energy Rate",
        data: Array.from({ length: 7 }, () => 1200), // Array with 8 elements
        color: "#e02424",
      },
    ]);
  };

  const displayWeek2Points = () => {
    setIsPaused(true);
    // Display the first 10 data points
    updateChart(dataHistory.slice(7, 14));
    setConstantSeries([
      {
        name: "Standard Energy Rate",
        data: Array.from({ length: 7 }, () => 1200), // Array with 8 elements
        color: "#e02424",
      },
    ]);
  };

  const displayWeek3Points = () => {
    setIsPaused(true);
    // Display the first 10 data points
    updateChart(dataHistory.slice(14, 21));
    setConstantSeries([
      {
        name: "Standard Energy Rate",
        data: Array.from({ length: 7 }, () => 1200), // Array with 8 elements
        color: "#e02424",
      },
    ]);
  };

  const displayMonthPoints = () => {
    setIsPaused(true);
    // Display the first 30 data points
    updateChart(dataHistory.slice(0, 31));

    // Update the constant series to display 30 elements
  setConstantSeries([
    {
      name: "Standard Energy Rate",
      data: Array.from({ length: 31 }, () => 1200), // Array with 30 elements
      color: "#e02424",
    },
  ]);
  };

  const handleLiveButtonClick = () => {
    setIsPaused(false);
    setIsLive(!isLive);  // Update isLive when "Live" button is clicked

    setConstantSeries([
      {
        name: "Standard Energy Rate",
        data: Array.from({ length: 8 }, () => 1200), // Array with 8 elements
        color: "#e02424",
      },
    ]);
  };

  

  return( 
    <div class='diagramContainer'>
      {isAdmin &&(
          <div>
          {isLive &&(<button onClick={handleLiveButtonClick}> Show Historic Data</button>)}
          {!isLive &&(<button onClick={handleLiveButtonClick}>Go Live</button>)}
          {!isLive &&(<button onClick={displayFirst7Points}>W1</button>)}
          {!isLive &&(<button onClick={displayWeek2Points}>W2</button>)}
          {!isLive &&(<button onClick={displayWeek3Points}>W3</button>)}
          {!isLive &&(<button onClick={displayMonthPoints}>1M</button>)}
          </div>
        )}

        <ReactApexChart
          options={options}
          series={[...series, ...constantSeries]}
          type="line"
          height={"100%"} 
          width={"100%"}
          ref={chartRef}
        />
        
        {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={"100%"} width={"100%"}/> */}
    </div>
  )

};
export default Graph3;

// import React, { useEffect, useState, useRef} from "react";
// import ReactApexChart from "react-apexcharts";
// import "../App.css";
// import { tokens } from "../theme";
// import { useTheme, Typography } from "@mui/material";
// import axios from 'axios';
// import { BorderAll } from "@mui/icons-material";






// // For Sub heading 2 Energy Consumptionn

// const Graph3 = ({isAdmin}) => {
   
//   const chartRef = useRef(null);
//   const [dataHistory, setDataHistory] = useState([]);


//   const [options, setOptions] = useState({
//       chart: {
//         type: 'line',
//         height: 350,
//         foreColor: "#939695",
//        // background: "#e8ebea"
//        toolbar:{
//         show: false
//        }
//       },
      
//       noData: {
//           text: 'Loading...',
//           style:{
//           color: "#abaaa7",
//           fontSize: "20"
//         }
//       },
    
//       tooltip: {
//         //Hover Box
//         enabled: true,
//         theme: "dark",
//         y: {
//           formatter: function (val) {
//             return  (val + " Kw/h")
//           }
//         }
//       },
//       yaxis: {
//         title: {
//           text: 'kW/h',
//           style:{
//             color: "#abaaa7",
//             fontSize: 14,
            
//            }
//         }
//       },
      
//       title: {
//           text: 'Building Consumption vs Standard Rate',
//           align: "center",
//           style:{
//             color: "#abaaa7",
//             fontSize: 18,
//            }
//       },
//       dataLabels: {
//         enabled: false
//       },
//       fill: {
       
//         colors: "#db352c"
//       },
      
//       legend: {
//         show: true
//       }
    
//   })

//   const [series, setSeries] = useState([
//     {
//       name: "Energy Consumption",
//       data: [], // Initially empty
//     },
   
//   ]);

//   const [isLive, setIsLive] = useState(true); //Controls which API data is fetched from
//   const [apiRoute, setApiRoute] = useState("/solarGenerationLive"); //Controls which API data is fetched from
//   const [isPaused, setIsPaused] = useState(false); //Controls the fetching of data

//   const updateChart = (newData) => {
//     // Update series data
//     const updatedSeries = [
//       {
//         ...series[0],
//         data: newData.map((item) => item.consumptionValue),
//       },
//       // Other series...
//     ];

//     // Update x-axis categories with formatted date strings
//     const updatedOptions = {
//       ...options,
//       xaxis: {
//         ...options.xaxis,
//         categories: newData.map((item) => {const date = new Date(item.x);
//           // Format the date as "dd MMM" (adjust the format as needed)
//           return `${date.getDate()} ${date.toLocaleString("default", {
//             month: "short",
//           })}`;
//         }),
//       },
//     };

//     // Set the updated series and options
//     setSeries(updatedSeries);
//     setOptions(updatedOptions);
//   };

//   const fetchData = async () => {try {

//     if (!isPaused){
//       const response = await fetch(apiRoute);
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();

//       // Parse the date strings into JavaScript Date objects
//       const parsedData = data.map((item) => ({
//         x: new Date(item.x),
//         consumptionValue: item.consumptionValue,
//       }));

//       setDataHistory(parsedData);
//       updateChart(parsedData);
//     }
    

    
//   } catch (error) {
//     console.error(error);
//   }
//   };


//   useEffect(() => {

//     // Function to update apiRoute based on isLive
//     const updateApiRoute = () => {
//       setApiRoute(isLive ? "/solarGeneration" : "/solarGenerationLive");
//     };

//     // Update apiRoute whenever isLive changes
//     updateApiRoute();

//     // Fetch data initially
//     if (!isPaused){
//       fetchData();
//     }

//     // Fetch data every 3 seconds
//     const fetchInterval = setInterval(fetchData, 3000);

//     // Cleanup: clear the interval when the component unmounts
//     return () => clearInterval(fetchInterval);

//   }, [isLive, isPaused]);


//   const displayFirst7Points = () => {
//     setIsPaused(true);
//     // Display the first 7 data points
//     updateChart(dataHistory.slice(0, 7));
//   };

//   const displayWeek2Points = () => {
//     setIsPaused(true);
//     // Display the first 10 data points
//     updateChart(dataHistory.slice(8, 14));
//   };

//   const displayWeek3Points = () => {
//     setIsPaused(true);
//     // Display the first 10 data points
//     updateChart(dataHistory.slice(14, 21));
//   };

//   const displayMonthPoints = () => {
//     setIsPaused(true);
//     // Display the first 30 data points
//     updateChart(dataHistory.slice(0, 30));
//   };

//   const handleLiveButtonClick = () => {
//     setIsPaused(false);
//     setIsLive(!isLive);  // Update isLive when "Live" button is clicked
//   };

  

//   return( 
//     <div class='diagramContainer'>
//       {isAdmin &&(
//           <div>
//           {isLive &&(<button onClick={handleLiveButtonClick}> Show Historic Data</button>)}
//           {!isLive &&(<button onClick={handleLiveButtonClick}>Go Live</button>)}
//           {!isLive &&(<button onClick={displayFirst7Points}>W1</button>)}
//           {!isLive &&(<button onClick={displayWeek2Points}>W2</button>)}
//           {!isLive &&(<button onClick={displayWeek3Points}>W3</button>)}
//           {!isLive &&(<button onClick={displayMonthPoints}>1M</button>)}
//           </div>
//         )}

//         <ReactApexChart
//           options={options}
//           series={series}
//           type="line"
//           height={"100%"} 
//           width={"100%"}
//           ref={chartRef}
//         />
        
//         {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={"100%"} width={"100%"}/> */}
//     </div>
//   )

// };
// export default Graph3;
