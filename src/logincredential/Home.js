import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <h1 className="logo">TruckFlow Oil Tanker Management</h1>
        </div>
        <nav className="navbar-right">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/" className="login-btn">Login</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Smarter, Safer, Faster Fleet Management</h2>
          <p>
            TruckFlow is a powerful logistics platform designed to manage oil tanker fleets with precision.
            From real-time tracking to fuel monitoring and driver analytics, TruckFlow helps you operate smarter, safer, and faster.
          </p>
          <button className="cta-button">Start Free Trial</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
