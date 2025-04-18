import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are here to help you learn and grow as a developer. Follow us on social media!</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: learn@webdev.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Location: India</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 WebDev Learner. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
