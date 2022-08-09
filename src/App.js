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

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("white");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router >
        <div className="App" id={theme} >
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
          </Routes>
          <Dock />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
