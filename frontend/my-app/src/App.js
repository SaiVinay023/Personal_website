import React from 'react';
import './Resume/components/Navbar.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './Resume/components/Navbar';
import Layout from './Resume/components/Layout'; // Adjust path as needed
import Home from './Resume/components/Home';
import Resume from './Resume/components/Resume';
import About from './Resume/components/About';
import Skills from './Resume/components/Skills';
import Hobbie from './Resume/components/Hobbies';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from './Resume/components/Project';
import Achievements from './Resume/components/Achievements';
import Experiences from './Resume/components/Experiences';
import Contact from './Resume/components/Contact';
//import SearchableContent from './Resume/components/SearchableContent';
const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hobbies" element={<Hobbie />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
              </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;