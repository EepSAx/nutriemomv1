import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signin.css";

export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-in">
      <div className="div">
        <header className="header">
          <div className="overlap">
            <div className="rectangle"></div>
            <div
              className="sign-up"
              onClick={() => navigate("/signup")}
            >
              <div className="text-wrapper">Sign Up</div>
            </div>
            <div
              className="overlap-wrapper"
              onClick={() => navigate("/signin")}
            >
              <div className="text-wrapper">Sign In</div>
            </div>
            <div className="search-bar">
              <div className="overlap-2">
                <div className="text-wrapper-2">Search</div>
                <img
                  className="search"
                  src="img/search.png"
                  alt="Search"
                />
              </div>
            </div>
            <div
              className="text-wrapper-3"
              onClick={() => navigate("/")}
            >
              Home
            </div>
            <div className="text-wrapper-4">Contact Us</div>
            <div className="text-wrapper-5">About Us</div>
            <img className="logo" src="img/logo.png" alt="Logo" />
          </div>
        </header>
        <div className="overlap-group-wrapper">
          <div className="overlap-3">
            <div className="text-wrapper-6">Welcome Back!</div>
            <p className="p">Sign in to your NutrieMom account</p>
            <div className="text-wrapper-7">Forgot password?</div>
            <div className="overlap-group-2">
              <input
                type="email"
                className="text-wrapper-8"
                placeholder="Enter your email"
              />
            </div>
            <div className="overlap-4">
              <input
                type="password"
                className="text-wrapper-9"
                placeholder="Enter your password"
              />
            </div>
            <div
              className="overlap-5"
              onClick={() => console.log("Sign In Clicked")}
            >
              <div className="text-wrapper-10">Sign In</div>
            </div>
            <div className="text-wrapper-11">Email</div>
            <div className="text-wrapper-12">Password</div>
            <div className="text-wrapper-13">
              <input type="checkbox" /> Remember me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
