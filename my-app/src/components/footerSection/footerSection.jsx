import React from 'react';
import '../footerSection/footerSection.css';
import logo from '../../Assets/NHL.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-section">
                    <h4>SHOP</h4>
                    <ul>
                        <li><a href="#T">Tires</a></li>
                        <li><a href="#W">Wheels</a></li>
                        <li><a href="#W&TP">Wheel & Tire Packages</a></li>
                        <li><a href="#B">Brands</a></li>
                        <li><a href="#P">Promotions</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><a href="#FTR">Flat Tire Repair</a></li>
                        <li><a href="#TR">Tire Rotation</a></li>
                        <li><a href="#BS">Brake Service</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>RESPONSIBILITY</h4>
                    <ul>
                        <li><a href="#C">Community</a></li>
                        <li><a href="#E">Environment</a></li>
                        <li><a href="#S">Safety</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>CAREERS</h4>
                    <ul>
                        <li><a href="#C">Current Openings</a></li>
                    </ul>
                    <h4>CORPORATE</h4>
                    <ul>
                        <li><a href="#About">About Us</a></li>
                        <li><a href="#Newsroom">Newsroom</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>COMMERCIAL</h4>
                    <ul>
                        <li><a href="#P">Products</a></li>
                        <li><a href="#S">Services</a></li>
                        <li><a href="#P">Programs</a></li>
                        <li><a href="#W">Why Us</a></li>
                        <li><a href="#R">Retread</a></li>
                        <li><a href="#L">Locations</a></li>
                        <li><a href="#C">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>MINING</h4>
                    <ul>
                        <li><a href="#m&m">Maintenance & Management</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#SS">Sustainable Solutions</a></li>
                        <li><a href="#work">Working for Kal Tire`s Mining Tire Group</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li><a href="#chat">Chat Now (Online now)</a></li>
                        <li><a href="#phone">Phone Us (+233 556540441)</a></li>
                        <li><a href="#email">Email Web Store Support</a></li>
                        <li><a href="#change">Change or Cancel My Appointment</a></li>
                    </ul>
                    <div className="footer-social">
                        <a href="#facebook"><i className="fab fa-facebook"></i></a>
                        <a href="#linkin"><i className="fab fa-linkedin"></i></a>
                        <a href="#youtube"><i className="fab fa-youtube"></i></a>
                        <a href="#instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="footer-logos">
                        <img src={logo} alt="Kal Tire" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Kal Tire | All rights reserved | Kal Tire, PO Box 1240 Vernon, BC V1T 6N6 | <a href="#p">Privacy Policy</a> | <a href="#t">Terms and Conditions</a> | &copy; NHL</p>
            </div>
        </footer>
    );
};

export default Footer;
