

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'; // Import the 'Home' component




function App() {
  const isTesting = 0;

  
  
  if(isTesting)return (

    <>
    
    <h1>
      hi
    </h1>

    </>

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
