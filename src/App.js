import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dock from './components/Dock';
import AllRoutes from './components/AllRoutes';
import './App.css';
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
        <Router>
          <div className="App" >
            <div id="wrapper">
              <AllRoutes />
              <Analytics />
            </div>
            <Dock />
          </div>
        </Router>
  );
}

export default App;
