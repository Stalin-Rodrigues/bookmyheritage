import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://bookmyheritageapi.onrender.com/blogs');
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Rest of your existing renderStars function and styles...

  if (loading) return <div>Loading blogs...</div>;

  return (
    <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.8)', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Our Blogs</h1>
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
};