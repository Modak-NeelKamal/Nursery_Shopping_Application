import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  
  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  return (
    <nav className="bg-emerald-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-emerald-100 transition-colors">
          Paradise Nursery
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/products" className="hover:text-emerald-100 transition-colors">
            Plants
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} className="hover:text-emerald-100 transition-colors" />
            {calculateTotalQuantity() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {calculateTotalQuantity()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;