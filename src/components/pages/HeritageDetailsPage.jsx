import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const HeritageDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [heritageSite, setHeritageSite] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeritageSite = async () => {
      try {
        const response = await fetch(`https://bookmyheritageapi.onrender.com/heritage-sites/${id}`);
        const data = await response.json();
        setHeritageSite(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching heritage site:', error);
        setLoading(false);
      }
    };

    fetchHeritageSite();
  }, [id]);

  const handleBuyTicket = () => {
    navigate('/booking', { state: { 
      name: heritageSite.name, 
      price: heritageSite.price,
      id: heritageSite.id 
    } });
  };

  if (loading) return <div>Loading...</div>;
  if (!heritageSite) return <div>Heritage site not found</div>;

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', color: 'black', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e0e0e0', margin: '20px' }}>
        <h1 style={{ color: 'black', marginBottom: '20px', fontSize: '2.5rem' }}>{heritageSite.name}</h1>
        <img src={heritageSite.image} alt={heritageSite.name} style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginBottom: '20px' }} />
        <p style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'black', lineHeight: '1.6' }}>{heritageSite.description}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>
          Price: <span style={{ color: 'orange' }}>{heritageSite.price}</span>
        </p>
        <button
          style={{
            backgroundColor: 'orange',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.25rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e67e22'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'orange'}
          onClick={handleBuyTicket}
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default HeritageDetailsPage;