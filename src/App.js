import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Dock from './components/Dock'
import AnimatedRoutes from './components/AnimatedRoutes';



export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router >
        <div className="App" id={theme} >
          <body>
          <div id="wrapper">
          <AnimatedRoutes/>
          </div>
          </body>
          <Dock />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
