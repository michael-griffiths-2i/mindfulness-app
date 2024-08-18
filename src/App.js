
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

import './App.css';
import myVideo from './trees.mp4'

function App() {
  return (

    
    
    <div className="App">
      
      <div className="video-container">
    
       <video controls loop autoPlay muted >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
          <h3> “Gratitude is one of the sweet shortcuts to finding peace of mind and happiness inside.”</h3>
          <h4> – Unknown</h4>
        </div>
        </div>
    </div>
  );
}

export default App;
