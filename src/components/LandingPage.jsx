import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: 'url(https://images.pexels.com/photos/1029844/pexels-photo-1029844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <div className="text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-md mx-4">
        <div className="flex justify-center mb-4">
          <Leaf size={48} className="text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-3">Paradise Nursery</h1>
        <p className="text-gray-700 mb-6">
          Discover our collection of beautiful, healthy plants to bring life and color to your home and garden.
        </p>
        <Link 
          to="/products" 
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;