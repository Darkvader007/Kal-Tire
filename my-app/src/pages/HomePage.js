import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footerSection/footerSection';
import HeroSection from '../components/hero/heroSection';
import PromotionSection from '../components/PromotionSection/promotionSection';
import ResourcesSection from '../components/resourceSection/resourceSection';
import NewsLetter from '../components/newsletterSection/newsletter';




function HomePage() {
    return(
        <div>
            <NavBar/>
            <HeroSection/>
            <PromotionSection/>
            <ResourcesSection/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default HomePage;