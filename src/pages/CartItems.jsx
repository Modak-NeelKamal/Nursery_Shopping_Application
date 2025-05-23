import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../slices/CartSlice';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CreditCard } from 'lucide-react';

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

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

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const calculateTotalCost = (item) => {
    return parseFloat((item.quantity * parseFloat(item.cost)).toFixed(2));
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity * parseFloat(item.cost);
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = () => {
    // This is handled by the router Link component
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <ShoppingCart className="text-emerald-600" />
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-gray-500 mb-4 flex justify-center">
              <ShoppingCart size={64} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any plants to your cart yet.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <ArrowLeft size={16} />
              Browse Plants
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-100">
                <div className="grid grid-cols-12 text-sm font-medium text-gray-500 mb-2 hidden md:grid">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
              </div>

              {cartItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <button 
                          onClick={() => handleRemove(item.name)}
                          className="text-sm text-red-500 flex items-center gap-1 mt-1 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 md:text-center">
                      <div className="text-sm text-gray-500 md:hidden">Price:</div>
                      <div className="font-medium">${item.cost}</div>
                    </div>

                    <div className="md:col-span-2 md:text-center">
                      <div className="text-sm text-gray-500 md:hidden">Quantity:</div>
                      <div className="flex items-center justify-start md:justify-center">
                        <button 
                          onClick={() => handleDecrement(item)}
                          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-3 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => handleIncrement(item)}
                          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 md:text-right">
                      <div className="text-sm text-gray-500 md:hidden">Total:</div>
                      <div className="font-medium text-emerald-600">${calculateTotalCost(item)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Link 
                  to="/products" 
                  onClick={handleContinueShopping}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-md transition-colors"
                >
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
                  <div className="text-gray-600">Total</div>
                  <div className="text-xl font-bold text-emerald-600">${calculateTotalAmount()}</div>
                </div>
                <button 
                  onClick={handleCheckoutShopping}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  <CreditCard size={16} />
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItems;