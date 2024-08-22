// src/HeroSection.js
import React from 'react';
import '../hero/heroSection.css';
import backgroundImage from '../../Assets/pexels-ywanphoto-188679.jpg';

const HeroSection = () => {
return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
            <h1>Tackle Any Terrain with Confidence </h1>
            <p>Tires Built to Withstand the Toughest Work and Weather Conditions.</p>
        </div>
    </section>
);
};

export default HeroSection;
