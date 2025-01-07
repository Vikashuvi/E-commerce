import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-[#F8D706] shadow-md fixed w-full  z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-600">SwiftMart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <Link to="/vegetables" className="text-gray-600 hover:text-green-600">Vegetables</Link>
            <Link to="/fruits" className="text-gray-600 hover:text-green-600">Fruits</Link>
            <Link to="/groceries" className="text-gray-600 hover:text-green-600">Groceries</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-green-600">
                  <FiSearch size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="text-gray-600 hover:text-green-600 relative">
              <FiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-green-600">
              <FiUser size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-green-600">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-green-600">Home</Link>
              <Link to="/products" className="block px-3 py-2 text-gray-600 hover:text-green-600">Products</Link>
              <Link to="/categories" className="block px-3 py-2 text-gray-600 hover:text-green-600">Categories</Link>
              <Link to="/deals" className="block px-3 py-2 text-gray-600 hover:text-green-600">Deals</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;