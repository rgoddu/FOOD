import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header style={{
            backgroundColor: '#ff66a3', // Pink background color
            padding: '10px 20px',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <h2 style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    textStroke: '1px black',
                    margin: '0',
                }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dev Diner</Link>
                </h2>
                <nav>
                    <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
                        <li style={{ display: 'inline', marginRight: '20px' }}>
                            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Home</Link>
                        </li>
                        <li style={{ display: 'inline', marginRight: '20px' }}>
                            <Link to="/menu" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Menu</Link>
                        </li>
                        <li style={{ display: 'inline' }}>
                            <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}