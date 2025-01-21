import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Vegetables from './components/Vegetables'
import Fruits from './components/Fruits'
import Groceries from './components/Groceries'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/fruits" element={<Fruits />} />\
            <Route path="/groceries" element={<Groceries />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App