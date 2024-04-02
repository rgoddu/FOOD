import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/Nav";
import './homePageStyle.css';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="page-container">
        <div className="image-container">
          <div className="section">
            <img src="/food-img/DevDiner.png" alt="Dev Diner Logo" />
          </div>
          <div className="text-container">
            <h1 className="title">Welcome to Dev Diner</h1>
            <p className="description">Discover a world of delicious dishes crafted with love and technology.</p>
            <Link to="/menu">
              <button className="menu-button">Explore Our Menu</button>
            </Link>
          </div>
        </div>
        <div className="section-container">
          <div className="section">
            <h2 className="section-title">Our Story</h2>
            <p className="section-description">Learn more about how Dev Diner started and our journey.</p>
          </div>
          <div className="section">
            <h2 className="section-title">Special Offers</h2>
            <p className="section-description">Check out our latest specials to enjoy delicious meals at great prices.</p>
          </div>
          <div className="section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">Have questions or feedback? Contact us today and let us know how we can assist you.</p>
          </div>
        </div>
      </div>
    </>
  );
}
