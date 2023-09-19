import {ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import TopBar from "./scenes/global/TopBar";
import SideBar from './scenes/global/SideBar';
import Overview from './scenes/overview';
import { useState, useEffect } from 'react';
import './App.css';
import SolarGeneration from './scenes/electricity/solar generation';
import TotalWaterUsage from './scenes/water/total water usage';
import EnergyConsumption from './scenes/electricity/energy consumption';
import CostSavings from './scenes/electricity/cost savings';
import InfoBox from './components/InfoBox';




function App() {
  
  const [theme, colorMode] = useMode();
  const [isSlideshowMode, setIsSlideshowMode] = useState(false);
  
  
  const routes = [
    { path: "/", element: <Overview /> },
    { path: "/solar generation", element: <SolarGeneration /> },
    { path: "/energy consumption", element: <EnergyConsumption /> },
    { path: "/cost savings", element: <CostSavings /> },
    { path: "/total water usage", element: <TotalWaterUsage /> },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); //Slideshow logic
  const currentRoute = routes[currentSlideIndex];

  useEffect(() => {
    let interval;
  
    if (isSlideshowMode) {
      interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === routes.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000); // Change slide every 1 second
    }
  
    return () => clearInterval(interval);
  }, [isSlideshowMode, routes.length]);

  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <div className="app">
            <div>
              Current Slide Index: {currentSlideIndex}
              <br />
              Current Path: {currentRoute.path}
            </div>
           {!isSlideshowMode &&<SideBar/>} {/*Show sidebar only if slideshow mode is off */}

          <main className = "content">
          <TopBar  onToggleSlideshow = {() => setIsSlideshowMode(!isSlideshowMode)}/>
           <Routes>

              {!isSlideshowMode &&
                  routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                  ))}

              {isSlideshowMode && currentRoute &&(  
                  <Route path={currentRoute.path} element={currentRoute.element}/>

              )}

              {/* {isSlideshowMode && currentRoute &&(  
                currentSlideIndex===3 &&(
                  // <Route path={currentRoute.path} element={currentRoute.element}/>
                  <Route path="/solar generation" element={<SolarGeneration/>}/> 
              ))} */}
 
              </Routes>

            
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
