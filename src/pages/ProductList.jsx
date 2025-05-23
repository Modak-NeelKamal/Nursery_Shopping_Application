import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  // Plant data array with categories
  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.pexels.com/photos/4017630/pexels-photo-4017630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Known for its calming scent and beautiful purple flowers.",
          cost: 15.99
        },
        {
          name: "Rosemary",
          image: "https://images.pexels.com/photos/6166306/pexels-photo-6166306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "A fragrant herb perfect for cooking and aromatherapy.",
          cost: 12.99
        },
        {
          name: "Mint",
          image: "https://images.pexels.com/photos/977903/pexels-photo-977903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Refreshing scent and flavor, perfect for teas and cocktails.",
          cost: 9.99
        },
        {
          name: "Basil",
          image: "https://images.pexels.com/photos/5503425/pexels-photo-5503425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Aromatic herb essential for Italian cuisine.",
          cost: 8.99
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://images.pexels.com/photos/4751969/pexels-photo-4751969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Known for its healing properties and easy care.",
          cost: 18.99
        },
        {
          name: "Eucalyptus",
          image: "https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Helps with respiratory issues and has a refreshing scent.",
          cost: 22.99
        },
        {
          name: "Chamomile",
          image: "https://images.pexels.com/photos/450050/pexels-photo-450050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Known for its calming properties and delicate flowers.",
          cost: 14.99
        },
        {
          name: "Echinacea",
          image: "https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Popular for boosting the immune system and beautiful blooms.",
          cost: 16.99
        }
      ]
    },
    {
      category: "Ornamental Plants",
      plants: [
        {
          name: "Monstera Deliciosa",
          image: "https://images.pexels.com/photos/3097770/pexels-photo-3097770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Iconic split leaves and easy care make this a popular choice.",
          cost: 29.99
        },
        {
          name: "Peace Lily",
          image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Elegant white flowers and air-purifying qualities.",
          cost: 24.99
        },
        {
          name: "Fiddle Leaf Fig",
          image: "https://images.pexels.com/photos/2090641/pexels-photo-2090641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Dramatic large leaves and striking presence.",
          cost: 34.99
        },
        {
          name: "Snake Plant",
          image: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Nearly indestructible and excellent air purifier.",
          cost: 19.99
        }
      ]
    }
  ];

  return (
    <div className="bg-emerald-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-emerald-800 mb-8 text-center">Our Plant Collection</h1>
        
        <div className="product-grid space-y-12">
          {plantsArray.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-6 border-b border-emerald-100 pb-2">
                {category.category}
              </h2>
              
              <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.plants.map((plant, plantIndex) => (
                  <div 
                    className="product-card bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    key={plantIndex}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        className="product-image w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        src={plant.image}
                        alt={plant.name}
                      />
                    </div>
                    <div className="p-4">
                      <div className="product-title text-lg font-medium text-gray-800 mb-1">{plant.name}</div>
                      <div className="product-description text-sm text-gray-600 mb-3 h-12 overflow-hidden">
                        {plant.description}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="product-cost text-lg font-semibold text-emerald-600">${plant.cost}</div>
                        <button 
                          className={`product-button px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            addedToCart[plant.name] 
                              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                              : 'bg-emerald-600 text-white hover:bg-emerald-700'
                          }`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={addedToCart[plant.name]}
                        >
                          {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;