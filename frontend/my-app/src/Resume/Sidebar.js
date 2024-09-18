// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optional: for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Resume">Resume/CV</Link></li>
          <li><Link to="/About">About Me</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
