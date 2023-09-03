import { Box } from "@mui/material";
import Header from "../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";


const Overview = () => {
    const [state, setState] = useState(
        {
          // Chart 1
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [5, 8, 12, 15, 18]
            }
          },

          optionss: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
          },

          series: [
            {
              name: "Power",
              data: [0, 0.85, 35.95, 28.06, 0.05]
            },
            {
                name: "Irradiance",
                data: [0, 93.56, 741.61, 635.05, 12.20]
              },
          ]
        }
      );
    return <Box m="20px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        <Header title="OVERVIEW" subtitle="Welcome to the Dashboard"/> {/*}Create an instance of the header class*/}
        </Box>

        <div className='MainContainer'>
              
              <div className='container1'>
                <div id='chart1'>
                  <Chart class='charts'
                    options={state.optionss}
                    series={state.series}
                    type="line"
                    width="300"
                    height="auto"
                   
                  /> 
                </div>
                <div id='chart2'>
                  <Chart class='charts'
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="300"
                    height="auto"
                  /> 
                </div>
              </div>

              <div className='container2'>
                  <div id='chart3'>
                    <Chart class='charts'
                      options={state.options}
                      series={state.series}
                      type="bar"
                      width="300"
                      height="auto"
                    /> 
                  </div>
                  <div id='chart4'>
                    <Chart class='charts'
                      options={state.options}
                      series={state.series}
                      type="bar"
                      width="300"
                      height="auto"
                      
                    /> 
                  </div>
              </div>
              
              
           
            </div>

    </Box>;
    
    

  
    
};

export default Overview;