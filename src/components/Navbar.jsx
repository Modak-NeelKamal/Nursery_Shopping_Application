import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-green-600 text-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-green-200 transition duration-300">
          Paradise Nursery
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/products" className="hover:text-green-200 transition duration-300">
            Plants
          </Link>
          
          <Link to="/cart" className="relative hover:text-green-200 transition duration-300">
            <ShoppingCart size={24} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;