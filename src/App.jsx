import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Vegetables from './components/Vegetables'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vegetables" element={<Vegetables />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App