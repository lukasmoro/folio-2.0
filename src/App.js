import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Me from './components/Me'
import Work from './components/Work'
import Visual from './components/Visual'
import Thought from './components/Thought'
import Dock from './components/Dock'
import Draggable from 'react-draggable'
import Arch from './components/Projects/Arch'
import Horizon from './components/Projects/Horizon'
import Spatial from './components/Projects/Spatial'
import Podcasts from './components/Projects/Podcasts'
import ARVR from './components/Projects/ARVR'


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
            {/* <Draggable>
            <div className="draggable">
              <div className="draggable-items">hello</div>
              <div className="draggable-items">world</div>
            </div>
          </Draggable> */}
            <Routes>
              <Route path="" element={<Me />} />
              <Route path="/me" element={<Me />} />
              <Route path="/work" element={<Work />} />
              <Route path="/visual" element={<Visual />} />
              <Route path="/thought" element={<Thought />} />
              <Route path="/arch" element={<Arch />} />
              <Route path="/horizon" element={<Horizon />} />
              <Route path="/spatial" element={<Spatial />} />
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/arvr" element={<ARVR />} />
            </Routes>
          </body>
          <Dock />
        </div>
      </Router>

    </ThemeContext.Provider>
  );
}

export default App;
