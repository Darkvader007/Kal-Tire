import React, { useState } from 'react';
import './newsletter.css';

function NewsLetter() {
const [email, setEmail] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
};

return (
    <div className="newsletter">
        <form className="newsletter-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="newsletter-label">
            Sign Up For The Latest Kal Tire News Updates And Promotions
        </label>
        <input
            type="email"
            id="email"
            className="newsletter-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <button type="submit" className="newsletter-button">
            Sign Up
        </button>
        </form>
    </div>
);
}

export default NewsLetter;
