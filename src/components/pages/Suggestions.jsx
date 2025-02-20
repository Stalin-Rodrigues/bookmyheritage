import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Suggestions() {
  const navigate = useNavigate();

  const heritageSites = [
    { name: 'Taj Mahal', image: './assets/taj_mahal.jpg', price: '₹500', id: 1 },
    { name: 'Colosseum', image: './assets/colosseum.jpg', price: '₹800', id: 2 },
    { name: 'Great Wall of China', image: './assets/great_wall.jpg', price: '₹600', id: 3 },
    { name: 'Machu Picchu', image: './assets/machu_picchu.jpg', price: '₹1000', id: 4 },
    { name: 'Eiffel Tower', image: './assets/eiffel_tower.jpg', price: '₹700', id: 5 },
    { name: 'Pyramids of Giza', image: './assets/pyramids_giza.jpg', price: '₹900', id: 6 }
  ];

  const handleImageClick = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {heritageSites.map((site, index) => (
          <div key={index} className="slider-item">
            <img
              src={site.image}
              alt={site.name}
              onClick={() => handleImageClick(site.id)}
              className="slider-image"
            />
            <h3 className="slider-name">{site.name}</h3>
            <p className="slider-price">{site.price}</p>
          </div>
        ))}
      </div>
      <button className="slider-button left">{"<"}</button>
      <button className="slider-button right">{">"}</button>
    </div>
  );
}