import React from 'react';
import Navigation from './Components/Navigation';
//import Carousel from './Components/Carousel'; // Corrected import path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About.jsx';

const App = () => {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />} /> {/* Render Navigation on all routes */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
