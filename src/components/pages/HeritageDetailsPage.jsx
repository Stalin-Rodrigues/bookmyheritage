import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HeritageDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, description, image, price } = location.state;

  const handleBuyTicket = () => {
    navigate("/booking", { state: { name, price } }); // Redirect to BookingPage
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "20px",
        color: "black",
      }}
    >
      <h1 style={{ color: "black" }}>{name}</h1>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
      />
      <p style={{ fontSize: "18px", marginTop: "20px", color: "black" }}>
        {description}
      </p>
      <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px", color: "black" }}>
        Price: <span style={{ color: "orange" }}>{price}</span>
      </p>

      {/* Buy Ticket Button */}
      <button
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "18px",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={handleBuyTicket}
      >
        Buy Ticket
      </button>
    </div>
  );
};

export default HeritageDetailsPage;