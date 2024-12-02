import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import NavBar from './Navbar';
import Loginandregister from './Components/Loginandregister';


function App() {
  return (
    <Router>
      <NavBar/>
      <switch>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={Loginandregister} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </switch>
    </Router>
  );
}

export default App;

