// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from "../components/Nav";

// export default function HomePage() {
//   return (
//     <>
//       <NavBar />
//       <div style={{ fontFamily: 'Roboto' }}>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <div style={{ flex: '0 0 50%' }}>
//             <img src="/food-img/DevDiner.png" alt="Dev Diner Logo" style={{ width: '100%', objectFit: 'cover' }} />
//           </div>
//           <div style={{ textAlign: 'center', flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//             <h1 style={{ color: '#ff1a75' }}>Welcome to Dev Diner</h1>
//             <p style={{ fontSize: '20px' }}>Discover a world of delicious dishes crafted with love and technology.</p>
//             <Link to="/menu" style={{ textDecoration: 'none' }}>
//               <button style={{ backgroundColor: '#ff1a75', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
//                 Explore Our Menu
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
//           <div style={{ flex: '0 0 50%', maxWidth: '500px', padding: '0 20px' }}>
//             <h2 style={{ fontSize: '35px' }}>Our Story</h2>
//             <p style={{ fontSize: '20px' }}>Learn more about how Dev Diner started and our journey.</p>
//           </div>
//           <div style={{ flex: '0 0 50%', maxWidth: '500px', padding: '0 20px' }}>
//             <h2 style={{ fontSize: '35px' }}>Special Offers</h2>
//             <p style={{ fontSize: '20px' }}>Check out our latest specials to enjoy delicious meals at great prices.</p>
//           </div>
//           <div style={{ flex: '0 0 50%', maxWidth: '500px', padding: '0 20px' }}>
//             <h2 style={{ fontSize: '35px' }}>Contact Us</h2>
//             <p style={{ fontSize: '20px' }}>Have questions or feedback? Contact us today and let us know how we can assist you.</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
