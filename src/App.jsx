import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Vegetables from './components/Vegetables'
import Fruits from './components/Fruits'
import Groceries from './components/Groceries'
import Cart from './components/Cart'
import Profile from './components/Profile'
import { CartProvider } from './components/CartContext'
import { SearchProvider } from './components/SearchContext'
import { ProfileProvider } from './components/ProfileContext'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <ProfileProvider>
          <Router>
            <div className="min-h-screen">
              <Navbar />
              <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/vegetables" element={<Vegetables />} />
                  <Route path="/fruits" element={<Fruits />} />
                  <Route path="/groceries" element={<Groceries />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </Router>
        </ProfileProvider>
      </SearchProvider>
    </CartProvider>
  )
}

export default App