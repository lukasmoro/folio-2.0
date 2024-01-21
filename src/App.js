import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dock from './components/Dock';
import AnimatedRoutes from './components/AnimatedRoutes';
import './App.css';


function App() {

  return (
        <Router>
          <div className="App" >
            <div id="wrapper">
              <AnimatedRoutes />
            </div>
            <Dock />
          </div>
        </Router>
  );
}

export default App;
