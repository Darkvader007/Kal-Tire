// src/HeroSection.js
import React from 'react';
import '../hero/heroSection.css';
import backgroundImage from '../../Assets/pexels-ywanphoto-188679.jpg';

const HeroSection = () => {
return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
            <h1>A good journey begins with a good tire</h1>
            <p>Discover our range of high-quality tires for every road and weather condition.</p>
        </div>
    </section>
);
};

export default HeroSection;
