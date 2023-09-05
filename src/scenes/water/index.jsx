import { Box } from "@mui/material";
import Header from "../../components/Header";
import Chart from "react-apexcharts";
import { useState } from "react";


const Water = () => {
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
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        }
      );
    return <Box m="20px">
        <Box display= "flex" justifyContent = "space-between" alignItems = "center">
        <Header title="Water" subtitle=""/>
        </Box>

        <div className='MainContainer'>
              
        <div className='container2'>
                  <div id='chart3'>
                    <Chart class='charts'
                      options={state.options}
                      series={state.series}
                      type="bar"
                      width="500"
                      height="auto"
                    /> 
                  </div>
                  <div id='chart4'>
                    <Chart class='charts'
                      options={state.options}
                      series={state.series}
                      type="bar"
                      width="500"
                      height="auto"
                      
                    /> 
                  </div>
              </div>

              
              
              
           
            </div>

    </Box>;
    
    

  
    
};

export default Water;