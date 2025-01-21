import React from 'react';
import { MdLocalOffer } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { toast, Toaster } from 'sonner';
import { useCart } from './CartContext';

function Fruit() {
  const { addToCart } = useCart();
  const fruits = [
    {
      id: 1,
      name: 'Apples',
      price: 149,
      image: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3',
      rating: 4.5,
      organic: true,
      discount: '10% off',
      description: 'Sweet and crispy fresh apples, perfect for snacking or baking'
    },
    {
      id: 2,
      name: 'Bananas',
      price: 59,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3',
      rating: 4.3,
      organic: true,
      description: 'Ripe and nutritious bananas, rich in potassium'
    },
    {
      id: 3,
      name: 'Oranges',
      price: 79,
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3',
      rating: 4.4,
      organic: true,
      discount: '15% off',
      description: 'Juicy and vitamin C-rich oranges, perfect for fresh juice'
    },
    {
      id: 4,
      name: 'Strawberries',
      price: 199,
      image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3',
      rating: 4.7,
      organic: true,
      discount: '12% off',
      description: 'Sweet and succulent strawberries, freshly picked'
    },
    {
      id: 5,
      name: 'Mangoes',
      price: 169,
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3',
      rating: 4.6,
      organic: true,
      description: 'Sweet and aromatic mangoes, perfect for desserts'
    },
    {
      id: 6,
      name: 'Grapes',
      price: 129,
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3',
      rating: 4.2,
      organic: true,
      description: 'Fresh and juicy grapes, perfect for snacking'
    }
  ];

  const handleAddToCart = (fruit) => {
    addToCart(fruit);
    toast.success(`Added ${fruit.name} to cart`, {
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
          Fresh Fruits
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col h-[450px]"
            >
              {fruit.discount && (
                <div className="absolute top-2 right-2 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800">
                    <MdLocalOffer className="mr-1" />
                    {fruit.discount}
                  </span>
                </div>
              )}
              
              {fruit.organic && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    <FaLeaf className="mr-1" />
                    Organic
                  </span>
                </div>
              )}

              <div className="h-[220px] overflow-hidden">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {fruit.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {fruit.description}
                </p>
                <RatingStars rating={fruit.rating} />
                <div className="mt-auto">
                  <div className="mb-4">
                    <span className="text-xl font-bold text-green-600">
                      ₹{fruit.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(fruit)}
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

export default Fruit;