import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">Learn-hub</div>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/home" onClick={handleLinkClick}>Home</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                <Link to="/profile" onClick={handleLinkClick}>Profile</Link>
                <Link to="/learn" onClick={handleLinkClick}>Learn-now</Link>
            </div>

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Background Overlay for full screen */}
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    );
};

export default Navbar;
