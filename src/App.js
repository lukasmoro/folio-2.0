import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dock from './components/Dock';
import AllRoutes from './components/AllRoutes';
import './App.css';



function App() {

  return (
        <Router>
          <div className="App" >
            <div id="wrapper">
              <AllRoutes />
            </div>
            <Dock />
          </div>
        </Router>
  );
}

export default App;
