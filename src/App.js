import React, { useState } from 'react';

const LoginSignupPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className={`container ${isSignIn ? '' : 'right-panel-active'}`} id="container">
      <div className={`form-container ${isSignIn ? 'sign-in-container' : 'sign-up-container'}`}>
        <form action="#">
          <h1>{isSignIn ? 'Sign in' : 'Create Account'}</h1>
          <div className="slider-container">
            <div className="slider-button">
              <div className={`slider-option ${isSignIn ? 'active' : ''}`} onClick={toggleForm}>
                Gamers
              </div>
              <div className={`slider-option ${!isSignIn ? 'active' : ''}`} onClick={toggleForm}>
                Organiser
              </div>
            </div>
          </div>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>{isSignIn ? 'or use your account' : 'or use your email for registration'}</span>
          {isSignIn ? (
            <>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
            </>
          ) : (
            <>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </>
          )}
          <button>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className={`overlay-panel overlay-left ${isSignIn ? 'overlay-active' : ''}`}>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
          <div className={`overlay-panel overlay-right ${!isSignIn ? 'overlay-active' : ''}`}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={toggleForm}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
