import React, { useEffect, useState, useRef} from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";
import axios from 'axios';


// For Sub heading 4 WATER USAGE

const Graph6 = () => {

  const [data, setData] = useState([]);
  const [xAxisCategories, setXAxisCategories] = useState([]);
  const [xAxisTitle, setXAxisTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
   
  const options ={
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
       
        categories: xAxisCategories,   
        title:{
          text: xAxisTitle,
          style:{
            fontSize: "20px"
          }
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
    
  }

  useEffect(() => {
    const fetchData = () => {
      axios.get("/waterUsagePerCate")
        .then(response => {
          const staticData = response.data;
          if (currentIndex < staticData.length) {
            const currentData = staticData[currentIndex];

            setData(currentData.data);
            setXAxisCategories(currentData.data.map(item => item.x));
            setXAxisTitle(currentData.date);
            // Set a timeout to increment the index and fetch the next data
            setTimeout(() => {
              setCurrentIndex(currentIndex + 1);
            }, 8000); // Adjust the time interval as needed
            //In this code, a setTimeout is used after fetching each static value to increment the index and fetch the next data after a specified time interval (in this case, 5000 milliseconds or 5 seconds). This ensures that each value is displayed and not overridden by the next one.
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, [currentIndex]);

  const series = [{ 
    name: "Day Usage",
    data: data.map(item => item.y) 
  }];

    


  return( 
    <div class='diagramContainer'>

     
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={"100%"} 
          width={"100%"}
         
        />
      

    </div>
   )

  };
export default Graph6;

