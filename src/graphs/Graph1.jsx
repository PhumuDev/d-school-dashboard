import { useState } from "react";
import Chart from "react-apexcharts";
import "../App.css";




// For sub heading 1 (Energy generation)

const Graph1 = () => {

const [state, setState] = useState(
    {
      // Energy generation by solar
      options: {
        colors:["#37eb34","#ebdc34"],
        theme:{
            mode:""
        },
        dataLabels: {
            style: {
              colors: ['#6b03fc'],
              fontSize: 12,
            }
          },
        chart: {
          id: "basic-bar"
        },
        yaxis:{
            labels:{
                formatter:(val)=>{
                    return ((val))
                },
            }
        },
        xaxis: {
            categories: [5, 8, 12, 15, 18]
        }
      },

      series: [
        {
          name: "Power",
          type:"bar",
          data: [0, 0.85, 35.95, 28.06, 0.05]
        },
        {
            name: "Irradiance",
            type:"line",
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
              //type="line"
              width="90%"
              height="100%"
            /> 
            </div> 
            
        )

  };
export default Graph1;