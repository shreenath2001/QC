import React from 'react';
import CourseCard from './CourseCard';
import '../styles/CoursePage.css';

const CoursePage = () => {
  const courses = [
    { name: 'Python', file: 'python_syllabus.pdf' },
    { name: 'Java', file: 'java_syllabus.pdf' },
    { name: 'Data Structures & Algorithms', file: 'dsa_syllabus.pdf' },
    { name: 'SQL', file: 'sql_syllabus.pdf' },
    { name: 'Aptitude & Reasoning', file: 'aptitude_syllabus.pdf' },
    { name: 'Full Stack Web Development', file: 'fullstack_syllabus.pdf' },
  ];

  return (
    <div className="course-page">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.name} name={course.name} file={course.file} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
