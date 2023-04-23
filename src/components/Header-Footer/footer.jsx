import React from 'react';
import "./footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <img src="logo.png" alt="Logo" />
                <h3>Chronicles</h3>
                <div className="social-links">
                    <a href="https://twitter.com">twitter</a>
                    <a href="https://facebook.com">facebook</a>
                    <a href="https://instagram.com">instagram</a>
                </div>
            </div>
            <div className="footer-right">
                <ul className="page-links">
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/login">Log In</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
