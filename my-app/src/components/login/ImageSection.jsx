import React from 'react';
import loginImage from '../../Assets/login image.png';
import '../login/login.css';


const ImageSection = () => {
    return (
        <div className="image-section">
            <img src={loginImage} alt="Login Page" />
        </div>
    );
};

export default ImageSection;
