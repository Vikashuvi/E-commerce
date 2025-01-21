import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const total = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border rounded-lg p-4 shadow-sm">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="ml-6 flex-grow">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 border rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border rounded-r"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="ml-auto">
              <p className="text-lg font-semibold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-2xl font-bold">₹{total.toFixed(2)}</span>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <Link
            to="/"
            className="px-6 py-2 border rounded hover:bg-gray-50"
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;