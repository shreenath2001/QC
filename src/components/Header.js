import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <h1>Quality Coders</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
    </nav>
  </header>
);

export default Header;
