import React, { useEffect, useState } from 'react'
import '../style/index.css'
import {Routes, Route} from "react-router-dom";
import Products from './Products';
import Login from './Login';
const App = () => {

  return (
    <>


      <Routes>
         <Route path="/" element={<App/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
