import React from 'react';
import './Footer.css'; 
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_logo">
                <img src={logo} alt="Logo" />
            </div>
            <hr className="footer__line" />
            <p className="footer__text">Contact us</p>
            <p className="footer__text">email: aa@eek.ee</p>

        </footer>
    );
};

export default Footer;
