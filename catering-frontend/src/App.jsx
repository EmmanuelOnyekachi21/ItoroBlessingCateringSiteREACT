import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import NotFoundPage from './components/ui/NotFoundPage';
import Home from './components/home/Home'


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App