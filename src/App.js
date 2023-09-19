import {ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import TopBar from "./scenes/global/TopBar";
import SideBar from './scenes/global/SideBar';
import Overview from './scenes/overview';
import { useState } from 'react';
import './App.css';
import SolarGeneration from './scenes/electricity/solar generation';
import TotalWaterUsage from './scenes/water/total water usage';
import EnergyConsumption from './scenes/electricity/energy consumption';
import CostSavings from './scenes/electricity/cost savings';



function App() {
  
  const [theme, colorMode] = useMode();
  const [isSlideshowMode, setIsSlideshowMode] = useState(false);
  
  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <div className="app">
           {!isSlideshowMode &&<SideBar/>} {/*Show sidebar only if slideshow mode is off */}

          <main className = "content">
          <TopBar  onToggleSlideshow = {() => setIsSlideshowMode(!isSlideshowMode)}/>
           <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/solar generation" element={<SolarGeneration/>}/> 
            <Route path="/energy consumption" element={<EnergyConsumption/>}/>
            <Route path="/cost savings" element={<CostSavings/>}/>  
            <Route path="/total water usage" element={<TotalWaterUsage/>}/>
            </Routes>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
