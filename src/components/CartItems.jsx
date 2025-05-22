import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { removeItem, updateQuantity } from '../CartSlice';

const CartItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // Calculate total cost of all items in cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * parseFloat(item.cost);
    });
    return total.toFixed(2);
  };

  // Calculate total cost for a specific item
  const calculateItemTotal = (item) => {
    return (item.quantity * parseFloat(item.cost)).toFixed(2);
  };

  // Handlers for cart actions
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = () => {
    // This will navigate back to the products page
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={64} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some plants to get started!</p>
          <Link 
            to="/products" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            Browse Plants
          </Link>
        </div>
      ) : (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            {cart.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row justify-between items-center p-4 ${
                  index < cart.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-green-800">{item.name}</h3>
                    <p className="text-gray-600">${item.cost} each</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center mr-6">
                    <button 
                      onClick={() => handleDecrement(item)}
                      className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition duration-300"
                    >
                      <Minus size={18} className="text-gray-700" />
                    </button>
                    
                    <span className="mx-3 w-8 text-center">{item.quantity}</span>
                    
                    <button 
                      onClick={() => handleIncrement(item)}
                      className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition duration-300"
                    >
                      <Plus size={18} className="text-gray-700" />
                    </button>
                  </div>

                  <div className="text-right mr-6">
                    <p className="font-bold text-green-700">${calculateItemTotal(item)}</p>
                  </div>

                  <button 
                    onClick={() => handleRemove(item)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link 
                to="/products" 
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-xl font-bold text-green-800 mb-3">
                Total: ${calculateTotalAmount()}
              </div>
              <button 
                onClick={handleCheckoutShopping} 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;