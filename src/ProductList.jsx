import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", description: "Produces oxygen at night, improving air quality." },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12", description: "Filters formaldehyde and xylene from the air." }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000", cost: "$20", description: "Calming scent, used in aromatherapy." },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1000", cost: "$18", description: "Sweet fragrance, blooms beautiful white flowers." }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  return (
    <div className="product-list-container">
      <h2>Our Plant Collection</h2>
      {plantsArray.map((category, index) => (
        <div key={index} className="category-section">
          <h3>{category.category}</h3>
          <div className="plant-grid">
            {category.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <h4>{plant.name}</h4>
                <p>{plant.cost}</p>
                <p>{plant.description}</p>
                <button 
                  className={`cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
