import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Suggestions() {
  const navigate = useNavigate();
  const [heritageSites, setHeritageSites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeritageSites = async () => {
      try {
        const response = await fetch('https://bookmyheritageapi.onrender.com/suggestions');
        const data = await response.json();
        setHeritageSites(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setLoading(false);
      }
    };

    fetchHeritageSites();
  }, []);

  const handleImageClick = (id) => {
    navigate(`/heritage/${id}`);
  };

  if (loading) return <div>Loading suggestions...</div>;

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