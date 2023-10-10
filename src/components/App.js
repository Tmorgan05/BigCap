import React, { useEffect, useState } from 'react'
import '../style/index.css'
import {Routes, Route} from "react-router-dom";
import Cart from './Cart';
import Products from './Products';
import Login from './Login';
import Welcome from './Welcome'
import CheckoutComplete from './CheckoutComplete'

const App = () => {
const [cart, setCart] = useState ([])
  return (
    <>



      <Routes>
         <Route path="/" element={<Welcome/>}/>
        <Route path="/products" element={<Products cart={cart} setCart={setCart}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path="/checkoutcomplete" element={<CheckoutComplete/>}/>
      </Routes>
    </>
  )

}

export default App
