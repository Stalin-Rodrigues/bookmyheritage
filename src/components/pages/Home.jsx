import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [heritageSites, setHeritageSites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch heritage sites from API
  useEffect(() => {
    const fetchHeritageSites = async () => {
      try {
        const response = await fetch('https://bookmyheritageapi.onrender.com/heritage-sites');
        const data = await response.json();
        setHeritageSites(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching heritage sites:', error);
        setLoading(false);
      }
    };

    fetchHeritageSites();
  }, []);

  // Rest of your existing code...
  // (Keep all your existing functions like handleBoxClick, scrollLeft, scrollRight)

  return (
    <div className="home-container">
      {/* Your existing layout */}
      {loading ? (
        <p>Loading heritage sites...</p>
      ) : (
        <div className="slider" ref={sliderRef} style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', gap: '20px', padding: '10px 20px' }}>
          {heritageSites.map((site, index) => (
            <div key={index} className="slider-item" onClick={() => handleBoxClick(site)} style={{ minWidth: '300px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer', overflow: 'hidden', marginTop: '10px' }}>
              <img src={site.image} alt={site.name} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }} />
              <div className="slider-name" style={{ padding: '10px', fontSize: '1.25rem', fontWeight: 'bold', color: 'black' }}>{site.name}</div>
              <div className="slider-price" style={{ padding: '10px', fontSize: '1.25rem', color: 'orange' }}>{site.price}</div>
            </div>
          ))}
        </div>
      )}
      {/* Rest of your existing JSX */}
    </div>
  );
}