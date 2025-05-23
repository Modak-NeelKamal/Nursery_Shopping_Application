import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
              Welcome to Paradise Nursery
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover our carefully curated collection of beautiful houseplants to bring nature into your home. 
              From aromatic herbs to stunning ornamentals, we have the perfect plant for you.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-md"
            >
              <Leaf size={20} />
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Beautiful houseplants" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Quality Plants</h3>
            <p className="text-gray-600">Our plants are carefully grown and nurtured to ensure they thrive in your home.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Expert Care Guides</h3>
            <p className="text-gray-600">Each plant comes with detailed care instructions to keep your green friends happy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Sustainable Packaging</h3>
            <p className="text-gray-600">We use eco-friendly packaging to minimize our environmental impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;