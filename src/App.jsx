import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Blogs from "./components/pages/Blogs";
import Contact from "./components/pages/Contact";
import Suggestions from "./components/pages/Suggestions";
import BookingPage from "./components/pages/BookingPage"; // Import the new component
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import HeritageDetailsPage from "./components/pages/HeritageDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/heritage/:id" element={<HeritageDetailsPage />} />
        <Route path="/booking" element={<BookingPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;