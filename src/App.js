import React, {useState} from 'react';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Index from './components/Index'


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Index />} />

          <Route path="/search" element={<Home />} />

          <Route path="/images" element={<Home />} />

          <Route path="/news" element={<Home />} />

          <Route path="/videos" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
