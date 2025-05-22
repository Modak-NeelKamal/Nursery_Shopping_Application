import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  // Plant data organized by category
  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.pexels.com/photos/4505174/pexels-photo-4505174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Known for its calming scent and beautiful purple flowers.",
          cost: 12.99
        },
        {
          name: "Rosemary",
          image: "https://images.pexels.com/photos/890677/pexels-photo-890677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "An aromatic herb with needle-like leaves and a robust fragrance.",
          cost: 9.99
        },
        {
          name: "Mint",
          image: "https://images.pexels.com/photos/977903/pexels-photo-977903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "A refreshing herb perfect for teas and culinary uses.",
          cost: 8.99
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://images.pexels.com/photos/7699592/pexels-photo-7699592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Succulent plant with healing gel inside its thick leaves.",
          cost: 14.99
        },
        {
          name: "Tulsi (Holy Basil)",
          image: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Sacred plant in Ayurvedic medicine with many health benefits.",
          cost: 11.99
        },
        {
          name: "Calendula",
          image: "https://images.pexels.com/photos/5696555/pexels-photo-5696555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Daisy-like flowering plant with skin-healing properties.",
          cost: 10.99
        }
      ]
    }
  ];

  // Handler for adding a plant to the cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch the action to add the product to the cart
    setAddedToCart((prevState) => ({
      ...prevState, // Spread the previous state to retain existing entries
      [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Plant Collection</h1>
      
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6 pb-2 border-b-2 border-green-200">
              {category.category}
            </h2>
            
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.plants.map((plant, plantIndex) => (
                <div 
                  key={plantIndex} 
                  className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <img 
                    className="product-image w-full h-56 object-cover" 
                    src={plant.image}
                    alt={plant.name}
                  />
                  
                  <div className="p-4">
                    <div className="product-title text-xl font-semibold text-green-800 mb-2">
                      {plant.name}
                    </div>
                    
                    <div className="product-description text-gray-600 mb-3 h-12 overflow-hidden">
                      {plant.description}
                    </div>
                    
                    <div className="product-cost text-lg font-bold text-green-700 mb-3">
                      ${plant.cost}
                    </div>
                    
                    <button
                      className={`product-button w-full py-2 px-4 rounded-md ${
                        addedToCart[plant.name] 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700 text-white transition duration-300'
                      }`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;