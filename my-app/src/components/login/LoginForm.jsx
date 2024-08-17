import React from 'react';
import loginImage from '../../Assets/login image.png';



const LoginForm = () => {
    return (
        <div className="login-container">
        <div className="login-form">
        <h2>LOGIN</h2>
        <form>
            <input type="email" id="email" placeholder='Email' name="email" required />
            <input type="password" id="password" placeholder='Password' name="password" required />

            <div>
            <   input type="checkbox" id="remember-me" name="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
            </div>

            <button type="submit">Login</button>
        </form>
        </div>
        <div className="login-image">
            <img src={loginImage} alt="Login Page" />
        </div>
    </div>
    );
};

export default LoginForm;
