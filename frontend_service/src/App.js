

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home1 from './components/Home1'; // Import the 'Home' component
import Login from './components/Login';
import Update from './components/Update';
import Register from './components/Register';




function App() {
  const isTesting = 1;

  
  
  if(isTesting)return (

    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update />} />
          
        </Routes>
      </Router>
    </div>

  );
  else return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          
        </Routes>
      </Router>
    </div>
  );












}

export default App;
