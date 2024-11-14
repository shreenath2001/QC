import React from 'react';
import '../styles/CourseCard.css';

const CourseCard = ({ name, file }) => (
  <div className="course-card">
    <h3>{name}</h3>
    <a href={`/assets/${file}`} download>Download Syllabus</a>
  </div>
);

export default CourseCard;
