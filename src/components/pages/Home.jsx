import React, { useEffect, useRef } from "react";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Data for the slider boxes
  const heritageSites = [
    {
      id: 1,
      name: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
      description: "A UNESCO World Heritage Site, this historic railway station is an architectural marvel with Victorian Gothic and Indian influences.",
      image: "/1.jpg",
      price: "₹100",
    },
    {
      id: 2,
      name: "Gateway of India",
      description: "Built in 1924, this iconic monument overlooking the Arabian Sea was constructed to commemorate the visit of King George V and Queen Mary to India.",
      image: "/2.jpg",
      price: "₹150",
    },
    {
      id: 3,
      name: "Elephanta Caves",
      description: "A UNESCO World Heritage Site located on Elephanta Island, these rock-cut caves house stunning sculptures dedicated to Lord Shiva.",
      image: "/3.jpg",
      price: "₹200",
    },
    {
      id: 4,
      name: "Dr. Bhau Daji Lad Museum",
      description: "Mumbai's oldest museum, showcasing the city's cultural and industrial history with exquisite artifacts, maps, and photographs.",
      image: "/4.jpg",
      price: "₹250",
    },
    {
      id: 5,
      name: "Rajabai Clock Tower",
      description: "Inspired by London's Big Ben, this striking clock tower stands within the University of Mumbai campus and is a fine example of Gothic Revival architecture.",
      image: "/5.jpg",
      price: "₹300",
    },
    {
      id: 6,
      name: "Flora Fountain & Horniman Circle",
      description: "A historic fountain at Hutatma Chowk, surrounded by colonial-era buildings, and the nearby Horniman Circle Gardens, a beautifully landscaped area in the heart of Mumbai's business district.",
      image: "/6.jpg",
      price: "₹350",
    },
  ];

  // Function to handle box click
  const handleBoxClick = (site) => {
    navigate(`/heritage/${site.id}`, { state: site });
  };

  // Function to scroll the slider to the left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll the slider to the right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const slider = sliderRef.current;

    const autoScroll = () => {
      if (slider) {
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollTo({
            left: 0,
            behavior: "auto",
          });
        } else {
          slider.scrollBy({
            left: 300,
            behavior: "smooth",
          });
        }
      }
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Section 1 (180%) - Main Content */}
      <section className="main-section">
        <header className="header">
          <h1 className="title">BookMyHeritage</h1>
          <div className="header-buttons">
            <Button variant="outline">Support</Button>
            <Link to="/blogs">
              <Button variant="outline">Blogs</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
          <Link to="/login">
            <Button variant="outline" className="login-button">Login</Button>
          </Link>
        </header>

        <main className="main-content">
          <h2 className="main-title">Explore Your Heritage With Us!</h2>
          <div className="search-container">
            <div className="search-box">
              <span className="menu-icon">🔍</span>
              <input type="text" placeholder="Search for heritage sites..." />
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-line"></div>
          <div className="footer-message">
            <span>We offer a range of premium museum</span>
            <span>booking options to enhance your visit</span>
          </div>
        </footer>
      </section>

      {/* Section 2 (50%) - Sliding Boxes */}
      <section className="slider-section">
        <h2 className="slider-title">Heritages You Must See</h2>
        <div className="slider-container">
          <button className="slider-button left" onClick={scrollLeft}>{"<"}</button>
          <div className="slider" ref={sliderRef}>
            {heritageSites.map((site, index) => (
              <div key={index} className="slider-item" onClick={() => handleBoxClick(site)}>
                <img src={site.image} alt={site.name} className="slider-image" />
                <div className="slider-name">{site.name}</div>
                <div className="slider-price">{site.price}</div>
              </div>
            ))}
          </div>
          <button className="slider-button right" onClick={scrollRight}>{">"}</button>
        </div>
      </section>

      {/* Section 3 (30%) - Transparent Black Background */}
      <section className="extra-section">
        <div className="extra-content">
          <h2>Discover More Attractions</h2>
          <p>Find exclusive insights about historical places worldwide.</p>
        </div>
        {/* Social Media Icons (Without Names) */}
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.jpg" alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.jpg" alt="Facebook" />
          </a>
        </div>
      </section>

      {/* Section 4 - Service, About, Help */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-box">
            <h3>Service</h3>
            <p>We provide premium booking services for heritage sites and museums.</p>
          </div>
          <div className="info-box">
            <h3>About</h3>
            <p>Learn more about our mission to preserve and promote cultural heritage.</p>
          </div>
          <div className="info-box">
            <h3>Help</h3>
            <p>Get assistance with bookings, payments, and other queries.</p>
          </div>
        </div>
      </section>

      {/* Footer with Copyright */}
      <footer className="copyright-footer">
        <p>© All rights reserved</p>
      </footer>
    </div>
  );
}