import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TicketPDF from './TicketPDF';

const BookingPage = () => {
  const location = useLocation();
  const { name, price, id } = location.state;
  const navigate = useNavigate();

  const [bookedForDate, setBookedForDate] = useState('');
  const [ticketCount, setTicketCount] = useState(1);
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);

  const bookedOnDate = new Date().toLocaleDateString();
  const totalPrice = ticketCount * parseInt(price.replace('₹', ''));

  const handleBuyTickets = async () => {
    if (!bookedForDate || !userName || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Post booking data to API
      const response = await fetch('https://bookmyheritageapi.onrender.com/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          heritageSiteId: id,
          userName,
          phoneNumber,
          bookedForDate,
          ticketCount,
          totalPrice,
        }),
      });

      if (response.ok) {
        setPaymentDone(true);
      } else {
        throw new Error('Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Booking failed. Please try again.');
    }
  };

  // Rest of your existing JSX...
  // (Keep all your existing form fields and PDF download link)
};