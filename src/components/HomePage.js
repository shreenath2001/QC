import React from 'react';
import TestimonialCard from './TestimonialCard';
import '../styles/HomePage.css';

const HomePage = () => (
  <div className="home-page">
    <section className="intro">
      <h2>Welcome to Quality Coders</h2>
      <p>
        We provide comprehensive training in Python, Java, DSA, SQL, Aptitude & Reasoning, and Full Stack Web Development.
        Our courses are tailored to meet industry demands, ensuring you're well-prepared for the tech world.
      </p>
      <p>We also offer dedicated placement assistance to help you secure your dream job.</p>
    </section>

    <section className="testimonials">
      <h3>What Our Students Say</h3>
      <TestimonialCard 
        name="Amit Kumar" 
        location="Odisha" 
        feedback="Quality Coders helped me secure a job as a Full Stack Developer. The guidance and placement assistance were exceptional." 
      />
      <TestimonialCard 
        name="Suman Das" 
        location="Odisha" 
        feedback="The DSA and Python courses were invaluable for my technical interview. Highly recommended!" 
      />
    </section>
  </div>
);

export default HomePage;
