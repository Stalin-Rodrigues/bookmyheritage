import React from 'react';

// Function to render stars based on the rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <span>
      {'★'.repeat(fullStars)}
      {halfStar === 1 ? '☆' : ''}
      {'☆'.repeat(emptyStars)}
    </span>
  );
};

function Blogs() {
  const blogs = [
    {
      title: 'The Beauty of Nature',
      content: 'Nature is an amazing source of beauty and inspiration. During my visit to the Elephanta Caves in Mumbai, I was struck by the architectural wonders and serene atmosphere...',
      rating: 4.5,
      author: 'John Doe',
      websiteExperience: 'The website made booking tickets a breeze, and I loved the user-friendly interface!'
    },
    {
      title: 'Tech Innovations in 2025',
      content: 'The future of technology looks promising with AI and Robotics. While visiting the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, I couldn’t help but marvel at how technology has influenced the preservation of Mumbai’s history...',
      rating: 4.2,
      author: 'Jane Smith',
      websiteExperience: 'Navigating the website was intuitive, and I found all the information I needed in no time.'
    },
    {
      title: 'Healthy Lifestyle Tips',
      content: 'A healthy lifestyle involves a balanced diet and regular exercise. I had an incredible experience visiting the Gateway of India, where I felt both energized and at peace, exploring one of Mumbai’s most iconic landmarks...',
      rating: 4.8,
      author: 'Michael Johnson',
      websiteExperience: 'The website provided a seamless experience. I was able to easily find tours to heritage places that matched my interests.'
    },
    {
      title: 'The Impact of Climate Change',
      content: 'Climate change is a pressing issue that affects the entire planet. Visiting the Sanjay Gandhi National Park was an eye-opener, showing me the delicate balance between preserving nature and urban development in Mumbai...',
      rating: 3.9,
      author: 'Emily Davis',
      websiteExperience: 'The website’s responsiveness made it easy for me to book a tour, and the detailed itineraries were incredibly helpful!'
    }
  ];

  const blogPostStyle = {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'white', // White background for blog posts
  };

  const headingStyle = {
    color: '#333',
  };

  const ratingStyle = {
    marginTop: '10px',
    fontStyle: 'italic',
    color: '#FFD700', // Gold color for ratings
  };

  const authorStyle = {
    fontStyle: 'italic',
    marginTop: '10px',
    color: '#555',
  };

  const experienceStyle = {
    marginTop: '15px',
    fontStyle: 'italic',
    color: '#555',
    fontSize: '0.9rem',
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Blogs</h1>
      {blogs.map((blog, index) => (
        <div key={index} style={blogPostStyle}>
          <h2 style={headingStyle}>{blog.title}</h2>
          <p>{blog.content}</p>
          <div style={ratingStyle}>Rating: {renderStars(blog.rating)}</div>
          <div style={authorStyle}>Written by: {blog.author}</div>
          <div style={experienceStyle}>
            <strong>Website Experience: </strong>{blog.websiteExperience}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
