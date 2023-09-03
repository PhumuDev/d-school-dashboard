import {ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import TopBar from "./scenes/global/TopBar";
import SideBar from './scenes/global/SideBar';
import Overview from './scenes/overview';
import { useState } from 'react';
import Chart from "react-apexcharts";
import './App.css';
import Electricity from './scenes/electricity';
import  Water  from './scenes/water';


//import Water from './scenes/water';
//import Electricity from './scenes/overview';
//import Settings from './scenes/overview';
//import Login from './scenes/login';




function App() {
  
  const [theme, colorMode] = useMode();
  
  
  // const [state, setState] = useState(
  //   {
      
  //     options: {
  //       chart: {
  //         id: "basic-bar"
  //       },
  //       xaxis: {
  //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  //       }
  //     },
  //     series: [
  //       {
  //         name: "series-1",
  //         data: [30, 40, 45, 50, 49, 60, 70, 91]
  //       },
  //       {
  //         name: "series-2",
  //         data: [20, 5, 4, 70, 99, 20, 10, 11]
  //       }
  //     ]
  //   }
  // );
  
  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <div className="app">
          <SideBar/>
          <main className = "content">
          <TopBar />
           <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/electricity" element={<Electricity/>}/> 
            <Route path="/water" element={<Water/>}/>
            </Routes>

            {/* <div className='MainContainer'>
              
              <div className='container1'>
                <div id='chart1'>
                  <Chart class='charts'
                    options={state.options}
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
              
              
           
            </div> */}
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
