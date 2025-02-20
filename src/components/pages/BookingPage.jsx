import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TicketPDF from "./TicketPDF"; // Component to generate PDF

const BookingPage = () => {
  const location = useLocation();
  const { name, price } = location.state;
  const navigate = useNavigate();

  const [bookedForDate, setBookedForDate] = useState(""); // Date for which the ticket is booked
  const [ticketCount, setTicketCount] = useState(1); // Number of tickets
  const [userName, setUserName] = useState(""); // Name of the person booking
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number of the person booking
  const [paymentDone, setPaymentDone] = useState(false); // Payment status

  const bookedOnDate = new Date().toLocaleDateString(); // Current date (Booked On)
  const totalPrice = ticketCount * parseInt(price.replace("₹", "")); // Total price calculation

  const handleBuyTickets = () => {
    // Validate inputs
    if (!bookedForDate || !userName || !phoneNumber) {
      alert("Please fill in all fields.");
      return;
    }
    setPaymentDone(true); // Mark payment as done
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
      <h1 style={{ color: "black" }}>Book Tickets for {name}</h1>

      {/* Name of the Person */}
      <div style={{ marginTop: "20px" }}>
        <label>Your Name: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: "5px", marginLeft: "10px" }}
        />
      </div>

      {/* Phone Number */}
      <div style={{ marginTop: "20px" }}>
        <label>Phone Number: </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          style={{ padding: "5px", marginLeft: "10px" }}
        />
      </div>

      {/* Booked For Date */}
      <div style={{ marginTop: "20px" }}>
        <label>Booked For Date: </label>
        <input
          type="date"
          value={bookedForDate}
          onChange={(e) => setBookedForDate(e.target.value)}
          style={{ padding: "5px", marginLeft: "10px" }}
        />
      </div>

      {/* Number of Tickets */}
      <div style={{ marginTop: "20px" }}>
        <label>Number of Tickets: </label>
        <input
          type="number"
          value={ticketCount}
          onChange={(e) => setTicketCount(e.target.value)}
          min="1"
          style={{ padding: "5px", marginLeft: "10px" }}
        />
      </div>

      {/* Total Price */}
      <div style={{ marginTop: "20px" }}>
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>

      {/* Payment Button */}
      {!paymentDone ? (
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
          onClick={handleBuyTickets}
        >
          Proceed to Payment
        </button>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "green" }}>Payment Successful! 🎉</h3>
          <PDFDownloadLink
            document={
              <TicketPDF
                name={name}
                bookedOnDate={bookedOnDate}
                bookedForDate={bookedForDate}
                userName={userName}
                phoneNumber={phoneNumber}
                ticketCount={ticketCount}
                totalPrice={totalPrice}
              />
            }
            fileName="ticket.pdf"
          >
            {({ loading }) =>
              loading ? "Generating PDF..." : "Download Your Ticket"
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default BookingPage;