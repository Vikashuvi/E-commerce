import React from 'react';
import { MdLocalOffer } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { toast, Toaster } from 'sonner';
import { useCart } from './CartContext';

function Grocerie() {
  const { addToCart } = useCart();
  const groceries = [
    {
      id: 1,
      name: 'Premium Sugar',
      price: 45,
      image: 'https://images.unsplash.com/photo-1709651808265-977ed7ef78c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5,
      organic: true,
      discount: '10% off',
      description: 'Fine grain pure cane sugar, perfect for baking and everyday use. Double-refined for superior quality.',
      category: 'Essentials',
      unit: 'kg'
    },
    {
      id: 2,
      name: 'Turmeric Powder',
      price: 89,
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500&auto=format',
      rating: 4.8,
      organic: true,
      description: 'Pure Salem turmeric powder with high curcumin content. Rich golden color and authentic aroma.',
      category: 'Spices',
      unit: '250g'
    },
    {
      id: 3,
      name: 'Filter Coffee Powder',
      price: 299,
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&auto=format',
      rating: 4.7,
      organic: true,
      discount: '15% off',
      description: 'Premium blend of Arabica and Robusta beans from Coorg. Dark roasted with rich aroma.',
      category: 'Beverages',
      unit: '500g'
    },
    {
      id: 4,
      name: 'Red Chilli Powder',
      price: 159,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format',
      rating: 4.6,
      organic: true,
      discount: '8% off',
      description: 'Premium Guntur chilli powder with perfect heat balance. Ideal for authentic Indian cooking.',
      category: 'Spices',
      unit: '500g'
    },
    {
      id: 5,
      name: 'Basmati Rice',
      price: 249,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format',
      rating: 4.9,
      organic: true,
      description: 'Aged premium basmati rice from Punjab. Long-grain variety with aromatic flavor.',
      category: 'Essentials',
      unit: 'kg'
    },
    {
      id: 6,
      name: 'Black Pepper',
      price: 189,
      image: 'https://plus.unsplash.com/premium_photo-1668446314011-301c7a98b6a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      organic: true,
      description: 'Premium Malabar black pepper. Hand-picked and sun-dried for maximum flavor.',
      category: 'Spices',
      unit: '250g'
    }
  ];

  const handleAddToCart = (groceries) => {
    addToCart(groceries);
    toast.success(`Added ${groceries.name} to cart`, {
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

  return (
    <div className="min-h-screen bg-white py-8">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-black mb-4">
          Fresh Groceries
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groceries.map((groceries) => (
            <div
              key={groceries.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col h-[450px]"
            >
              {groceries.discount && (
                <div className="absolute top-2 right-2 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800">
                    <MdLocalOffer className="mr-1" />
                    {groceries.discount}
                  </span>
                </div>
              )}
              
              {groceries.organic && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    <FaLeaf className="mr-1" />
                    Organic
                  </span>
                </div>
              )}

              <div className="h-[220px] overflow-hidden">
                <img
                  src={groceries.image}
                  alt={groceries.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {groceries.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {groceries.description}
                </p>
                <RatingStars rating={groceries.rating} />
                <div className="mt-auto">
                  <div className="mb-4">
                    <span className="text-xl font-bold text-green-600">
                      ₹{groceries.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(groceries)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grocerie;