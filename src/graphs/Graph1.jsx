import React, { useEffect, useState, useRef} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";




// For sub heading 1 (Solar generation)

const Graph1 = ({isAdmin}) => {
  
  const chartRef = useRef(null);
  const [dataHistory, setDataHistory] = useState([]);


  
  const [series, setSeries] = useState(
     [{
        name: 'Power',
        data: [],
        color: "#39de2c",
     }
      
    ])

  const [options, setOptions] = useState({
      
        chart: {
          height: 350,
          type: 'line',
          foreColor: "#939695",
          fontFamily: 'sans-serif',
          toolbar:{
            show: false
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
       
      noData: {
        text: 'Loading...',
        style:{
        color: "#abaaa7",
        fontSize: "20"
      }
    },
        title: {
          text: 'Solar Panels Energy Generation',
          align: "center",
         style:{
          color: "#abaaa7",
          fontSize: 18,
          
         }
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
       
        yaxis: [{
          title: {
            text: 'kW/h',  // For power
            style:{
              color: "#abaaa7",
              fontSize: 12,
              fontFamily: 'Arial, sans-serif'
              
             }
          },
        
        },
       
      ]
      })
      const [isLive, setIsLive] = useState(true); //Controls which API data is fetched from
      const [apiRoute, setApiRoute] = useState("/solarGenerationLive"); //Controls which API data is fetched from
      const [isPaused, setIsPaused] = useState(false); //Controls the fetching of data

      const updateChart = (newData) => {
        // Update series data
        const updatedSeries = [
          {
            ...series[0],
            data: newData.map((item) => item.generationValue),
          },
         
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
            generationValue: item.generationValue,
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
  };

  const displayWeek2Points = () => {
    setIsPaused(true);
    // Display the first 10 data points
    updateChart(dataHistory.slice(7, 14));
  };

  const displayWeek3Points = () => {
    setIsPaused(true);
    // Display the first 10 data points
    updateChart(dataHistory.slice(14, 21));
  };

  const displayMonthPoints = () => {
    setIsPaused(true);
    // Display the first 30 data points
    updateChart(dataHistory.slice(0, 31));
  };

  const handleLiveButtonClick = () => {
    setIsPaused(false);
    setIsLive(!isLive);  // Update isLive when "Live" button is clicked
  };
    
    
      return( 
        <div class='diagramContainer2'>
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
              series={series}
              type="bar"
              height={"100%"} 
              width={"100%"}
              ref={chartRef}
            />
          


    </div>
   )

  };
export default Graph1;

 

           