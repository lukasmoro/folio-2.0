import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Me from './components/Me'
import Work from './components/Work'
import Visual from './components/Visual'
import Thought from './components/Thought'
import Dock from './components/Dock'


function App() {
  return (
    <Router>
      <div className="App">
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
  );
}

export default App;
