import React, { useEffect, useState } from 'react';
import { useSearch } from './SearchContext';
import { FaStar, FaLeaf } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { toast, Toaster } from 'sonner';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { searchProducts } from '../data/ProductData';

const SearchResults = () => {
  const { searchQuery, searchResults, updateSearchResults } = useSearch();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  // Fetch data and filter based on search query
  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      // Use the searchProducts function from our data file
      const results = searchProducts(searchQuery);
      updateSearchResults(results);
      setLoading(false);
    } else {
      updateSearchResults([]);
      setLoading(false);
    }
  }, [searchQuery, updateSearchResults]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`Added ${product.name} to cart`, {
      position: 'bottom-right',
      duration: 2000,
      className: 'bg-green-600 text-white',
    });
  };

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  if (!searchQuery) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Search Results</h1>
          <p className="text-gray-600">Please enter a search term to find products.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Search Results</h1>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-black mb-4">
          Search Results for "{searchQuery}"
        </h1>

        {searchResults.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No products found matching your search.</p>
            <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <div
                key={`${product.category}-${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col h-[450px]"
              >
                {product.discount && (
                  <div className="absolute top-2 right-2 z-10">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800">
                      <MdLocalOffer className="mr-1" />
                      {product.discount}
                    </span>
                  </div>
                )}

                {product.organic && (
                  <div className="absolute top-2 left-2 z-10">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                      <FaLeaf className="mr-1" />
                      Organic
                    </span>
                  </div>
                )}

                <div className="h-[220px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <RatingStars rating={product.rating} />
                  <div className="mt-auto">
                    <div className="mb-4">
                      <span className="text-xl font-bold text-green-600">
                        ₹{product.price}
                      </span>
                      {product.unit && (
                        <span className="text-sm text-gray-500 ml-1">
                          /{product.unit}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
