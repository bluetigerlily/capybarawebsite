import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

//components
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Community from './components/community/community';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="community" element={<Community />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  
  );
}

export default App;
