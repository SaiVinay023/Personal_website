import React from 'react';
import { Outlet } from 'react-router-dom';
import BreadcrumbsComponent from './BreadcrumbsComponent'; // Adjust path as needed
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '60px' }}> {/* Adjust this value based on Navbar height */}
        <BreadcrumbsComponent />
      </div>
      <br></br>
      <main style={{ padding: '80px' }}> {/* Add padding to main content */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
