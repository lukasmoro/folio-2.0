import React, { createContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dock from './components/Dock';
import AnimatedRoutes from './components/AnimatedRoutes';
import { NavigationContext } from './components/NavigationContext.jsx'; 
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [navigationDirection, setNavigationDirection] = useState('none'); 

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContext.Provider value={{ navigationDirection, setNavigationDirection }}> 
        <Router>
          <div className="App" id={theme}>
            <div id="wrapper">
              <AnimatedRoutes />
            </div>
            <Dock />
          </div>
        </Router>
      </NavigationContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
