import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footerSection/footerSection';
import Login from '../components/login/login';
import NewsLetter from '../components/newsletterSection/newsletter';



function LoginPage() {
    return(
        <div>
            <NavBar/>
            <Login/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default LoginPage;