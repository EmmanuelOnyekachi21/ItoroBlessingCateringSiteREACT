import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import NotFoundPage from './components/ui/NotFoundPage';
import Home from './components/home/Home'
import Menu from './components/menu/Menu';
import ScrollToTop from './components/ui/ScrollToTop';
import CateringPage from './components/catering/CateringPage';
import DishInfo from './components/dishes/DishInfo';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Verify from './components/Auth/Verify'
import RegenerateToken from './components/Auth/RegenerateToken';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import { DishProvider } from './context/DishContext';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <CartProvider>
      <DishProvider>
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/catering' element={<CateringPage />} />
            <Route path='/dishes/:category_slug/:product_slug' element={<DishInfo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/regenerate-token' element={<RegenerateToken />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      </DishProvider>
    </CartProvider>
  )
}

export default App