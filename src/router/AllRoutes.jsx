import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { CartProvider } from '../contex/CartContext';
import Cart from '../pages/Cart';

function AllRoutes() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default AllRoutes