import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Me from './components/Me'
import Work from './components/Work'
import Visual from './components/Visual';
import Thought from './components/Thought'
import Dock from './components/Dock'
import Arch from './components/Projects/Arch'
import RRMC from './components/Projects/RRMC'
import LittleJoshuaTree from './components/Projects/LittleJoshuaTree'
import Podcasts from './components/Projects/Podcasts'
import Sensorium from './components/Projects/Sensorium'
import SpatialLabs from './components/Projects/SpatialLabs';



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
            <Routes>
              <Route path="/" element={<Me />} />
              <Route path="/me" element={<Me />} />
              <Route path="/work" element={<Work />} />
              <Route path="/visual" element={<Visual />} />
              <Route path="/thought" element={<Thought />} />
              <Route path="/arch" element={<Arch />} />
              <Route path="/rrmc" element={<RRMC />} />
              <Route path="/liljosh" element={<LittleJoshuaTree />} />
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/sensorium" element={<Sensorium />} />
              <Route path="/slabs" element={<SpatialLabs />} />
            </Routes>
          </body>
          <Dock />
        </div>
      </Router>

    </ThemeContext.Provider>
  );
}

export default App;
