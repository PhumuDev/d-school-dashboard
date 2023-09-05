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
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
