import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App