import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="sign-up">
      <div className="div">
        <header className="header">
          <div className="overlap">
            <div className="rectangle"></div>
            <div
              className="overlap-group-wrapper"
              onClick={() => navigate("/signup")}
            >
              <div className="text-wrapper">Sign Up</div>
            </div>
            <div
              className="sign-in"
              onClick={() => navigate("/signin")}
            >
              <div className="text-wrapper">Sign In</div>
            </div>
            <div className="search-bar">
              <div className="overlap-2">
                <div className="text-wrapper-2">Search</div>
                <img className="search" src="img/search.png" alt="Search" />
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
        <div className="overlap-3">
          <div className="overlap-wrapper">
            <div className="overlap-4">
              <div className="text-wrapper-6">Create Account</div>
              <p className="p">Join NutrieMom for a healthier journey</p>
              <div className="overlap-group-wrapper-2">
                <div className="overlap-group-2">
                  <button className="text-wrapper-7">Sign Up</button>
                </div>
              </div>
              <div className="first-name">
                <input
                  className="overlap-5"
                  type="text"
                  placeholder="First name"
                />
                <div className="text-wrapper-9">First Name</div>
              </div>
              <div className="last-name">
                <input
                  className="overlap-5"
                  type="text"
                  placeholder="Last name"
                />
                <div className="text-wrapper-9">Last Name</div>
              </div>
              <div className="email">
                <input
                  className="overlap-6"
                  type="email"
                  placeholder="Enter your email"
                />
                <div className="text-wrapper-9">Email</div>
              </div>
              <div className="password">
                <input
                  className="overlap-6"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="text-wrapper-9">Password</div>
              </div>
              <div className="date-of-birth">
                <input
                  className="overlap-6"
                  type="date"
                  placeholder="dd/mm/yyyy"
                />
                <div className="text-wrapper-9">Date of Birth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
