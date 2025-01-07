import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<div>Products Page</div>} />
            <Route path="/categories" element={<div>Categories Page</div>} />
            <Route path="/deals" element={<div>Deals Page</div>} />
            <Route path="/cart" element={<div>Shopping Cart</div>} />
            <Route path="/account" element={<div>User Account</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App