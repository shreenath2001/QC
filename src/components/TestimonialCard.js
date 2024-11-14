import React from 'react';
import '../styles/TestimonialCard.css';

const TestimonialCard = ({ name, location, feedback }) => (
  <div className="testimonial-card">
    <h4>{name}</h4>
    <p><em>{location}</em></p>
    <p>"{feedback}"</p>
  </div>
);

export default TestimonialCard;
