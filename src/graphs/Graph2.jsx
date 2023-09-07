import { useState } from "react";
import Chart from "react-apexcharts";
import "../App.css";



// For sub heading 1 (Energy generation)

const Graph2 = () => {

const [state, setState] = useState(
    {
      // Energy generation by solar
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
            categories: [5, 8, 12, 15, 18]
        }
      },

      series: [
        
        {
            name: "Irradiance",
            data: [0, 93.56, 741.61, 635.05, 12.20]
          },
      ]
    }
  );

  return(     
 
            <div class='diagramContainer'>
              <Chart class='charts'
              options={state.options}
              series={state.series}
              type="bar"
              width="90%"
              height="100%"
            /> 
  
          </div> 
        )

  };
export default Graph2;