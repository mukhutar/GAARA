import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from '../../Pages/Home/Product'
import Home from '../../Pages/Home/Home'

function Approuter() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
     </Routes>
    </Router>
  )
}

export default Approuter
