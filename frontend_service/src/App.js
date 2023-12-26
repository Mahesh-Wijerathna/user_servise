

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'; // Import the 'Home' component
import Login from './components/Login';
import Register from './components/Register';




function App() {
  const isTesting = 1;

  
  
  if(isTesting)return (

    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </Router>
    </div>

  );
  else return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );












}

export default App;
