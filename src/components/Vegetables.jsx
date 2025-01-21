import React from 'react';
import { MdLocalOffer } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { toast, Toaster } from 'sonner';
import { useCart } from './CartContext';

function Vegetables() {
  const { addToCart } = useCart();
  const vegetables = [
    {
      id: 1,
      name: 'Tomatoes',
      price: 29,
      image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3',
      rating: 4.5,
      organic: true,
      discount: '10% off',
      description: 'Farm-fresh, juicy tomatoes perfect for salads and cooking'
    },
    {
      id: 2,
      name: 'Carrots',
      price: 19,
      image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3',
      rating: 4.0,
      organic: true,
      description: 'Sweet and crunchy carrots rich in vitamins'
    },
    {
      id: 3,
      name: 'Broccoli',
      price: 49,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3',
      rating: 4.2,
        organic: true,
      discount: '15% off',
      description: 'Crisp and nutritious broccoli florets'
    },
    {
      id: 4,
      name: 'Potatoes',
      price: 89,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3',
      rating: 4.2,
      organic: true,
      discount: '12% off',
      description: 'Fresh and flavorful potatoes'
    },
    {
      id: 5,
      name: 'Red Bell Peppers',
      price: 69,
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3',
      rating: 4.2,
      description: 'healthy and delicious red bell peppers'
    },
    {
      id: 6,
      name: 'Betroots',
      price: 89,
      image: 'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?ixlib=rb-4.0.3',
      rating: 4.2,
      description: 'nutritious and delicious betroots'
    }
  ];

  const handleAddToCart = (vegetable) => {
    addToCart(vegetable);
    toast.success(`Added ${vegetable.name} to cart`, {
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
          Fresh Vegetables
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vegetables.map((vegetable) => (
            <div
              key={vegetable.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col h-[450px]"
            >
              {vegetable.discount && (
                <div className="absolute top-2 right-2 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800">
                    <MdLocalOffer className="mr-1" />
                    {vegetable.discount}
                  </span>
                </div>
              )}
              
              {vegetable.organic && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    <FaLeaf className="mr-1" />
                    Organic
                  </span>
                </div>
              )}

              <div className="h-[220px] overflow-hidden">
                <img
                  src={vegetable.image}
                  alt={vegetable.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {vegetable.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {vegetable.description}
                </p>
                <RatingStars rating={vegetable.rating} />
                <div className="mt-auto">
                  <div className="mb-4">
                    <span className="text-xl font-bold text-green-600">
                      ₹{vegetable.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(vegetable)}
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

export default Vegetables;