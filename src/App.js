import React from 'react';
import Navigation from './Components/Navigation';
import Carousel from './Components/Carousel'; // Corrected import path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About.jsx';

const App = () => {
  {/*const images = [
    'https://via.placeholder.com/800x400/ff5733/fff',
    'https://via.placeholder.com/800x400/33ff57/fff',
    'https://via.placeholder.com/800x400/5733ff/fff',
  ];*/}

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />} /> {/* Render Navigation on all routes */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* Render the Carousel component */}
      {/*<div className="App">
        <h1>Simple React Carousel</h1>g
        <Carousel images={images} />
  </div>*/}
    </Router>
  );
};

export default App;
