import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../App.css";




// For sub heading 1 (Solar generation)

const Graph1 = () => {


const [series, setSeries] = useState([])
const [options, setObject] = useState({})

const [state, setState] = useState({
    series: [{
        name: 'Power',
        type: 'column',
        color: "#39de2c",
        data: [30, 31, 32, 40, 41, 43, 56, 50, 44, 39, 32, 20]
      }, {
        name: 'Irradiance',
        type: 'line',
        color: "#f5c542",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      options: {
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
        },
        stroke: {
          width: [0, 4],
          curve: "smooth"
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
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime',
          labels:{
            style:{
              color:"#abaaa7",
            }
          }
          
          
        },
        yaxis: [{
          title: {
            text: 'Kw (BAR Graph)',  // For power
            style:{
              color: "#abaaa7",
              fontSize: 12,
              fontFamily: 'Arial, sans-serif'
              
             }
          },
        
        }, {
          opposite: true,
          title: {
            text: 'W/m2 (LINE Graph)',  // For Irradiance
            style:{
              color: "#abaaa7",
              fontSize: 12,
              
             }
          }
        }]
      },
})
    
// useEffect(() =>{

//   const xAxis = []
//   const yAxis = []

//    axios.get('/electricity')
//   // .then(res => res.json())
//   // .then(
//   //   dataa => {
//   //     setData(dataa)
//   //     console.log("python",dataa)
//   //   }
//   // )
//    .then(response => {
//      console.log("response",response)
//      response.data.energy_consumption.map(item => {
//        console.log("item",item)
//          xAxis.push(item.time)
//          yAxis.push(item.load_power)
//      })
//      setObject({
//        chart: {
//          type: 'bar',
//          height: 350
//        },
//        xaxis: {
//          categories: xAxis
//        },
//      })
//      setSeries([
//      {
//        name: 'Energy',
//        data: yAxis
//      },
     
//     ])
//      console.log("stats",xAxis,yAxis)
//    }).catch(e => {
//      alert(e);
//    })
  

// }, [])
              
       
      
      
      
    


  return( 
    <div class='diagramContainer2'>
        <ReactApexChart options={state.options} series={state.series} type="line" height={"100%"} width={"100%"}/>
        {/* <Typography color={colors.primary[100]}>Hello World</Typography> */}


    </div>
   )

  };
export default Graph1;

 

           