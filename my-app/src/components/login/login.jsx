import React from 'react';
import LoginForm from './LoginForm';
// import ImageSection from './ImageSection';
import '../login/login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <LoginForm />
                {/* <ImageSection /> */}
            </div>
        </div>
    );
};

export default Login;
