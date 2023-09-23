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
import FunFact from './components/FunFact';




function App() {
  
  const [theme, colorMode] = useMode();
  const [isSlideshowMode, setIsSlideshowMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  
  const routes = [
    { path: "/", element: <Overview /> },
    { path: "/solar generation", element: <SolarGeneration /> },
    { path: "/energy consumption", element: <EnergyConsumption /> },
    { path: "/cost savings", element: <CostSavings /> },
    { path: "/total water usage", element: <TotalWaterUsage /> },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); //Slideshow logic
  const currentRoute = routes[currentSlideIndex];
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
  
    if (isSlideshowMode) {
      interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === routes.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 second
    }
  
    return () => clearInterval(interval);
  }, [isSlideshowMode, routes.length]);

  useEffect(() => {// Handle timing of the fun facts
    let interval;
  
    if (isSlideshowMode) {
      interval = setInterval(() => {
        if (count>4){
          setCount(0);
        } else {
          setCount(count+1)
        }
      }, 3500); // set count ever 3.5 seconds
    }
  
    return () => clearInterval(interval);
  }, [isSlideshowMode,count]);
  

  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <div className="app">

           {!isSlideshowMode &&<SideBar/>} {/*Show sidebar only if slideshow mode is off */}

          <main className = "content">
          <TopBar  onToggleSlideshow = {() => setIsSlideshowMode(!isSlideshowMode)} isSlideshowMode ={isSlideshowMode}/>
           <Routes>

              {!isSlideshowMode &&
                  routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                  ))}
 
              </Routes>
              
              {/* Return the relevant page in slideshow mode */}
              {isSlideshowMode && currentRoute && (() => {
                  switch (currentSlideIndex) {
                      case 0:
                          return <Overview />;
                      case 1:
                          return <SolarGeneration />;
                      case 2:
                          return <EnergyConsumption />;
                      case 3:
                          return <TotalWaterUsage />;
                      case 4:
                          return <CostSavings />;
                      default:
                          return null;
                  }
              })()}

              {/* Display fun facts */}
              {isSlideshowMode && (() => {
                  switch (count) {
                      case 1:
                          return <FunFact subtext="Arsenal are winning the champions league"/>;
                      case 3:
                          return <FunFact subtext="Arsenal are winning the league" />;
                      default:
                          return null;
                  }
              })()}

            
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
