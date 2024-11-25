import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
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
              className="sign-in"
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
            <div className="home">
              <div className="overlap-3">
                <img
                  className="vector"
                  src="img/vector-home.png"
                  alt="Home"
                />
                <div className="text-wrapper-3">Home</div>
              </div>
            </div>
            <div className="text-wrapper-4">Contact Us</div>
            <div className="text-wrapper-5">About Us</div>
            <img className="logo" src="img/logo.png" alt="Logo" />
          </div>
        </header>
        <div className="sidebar">
          <div className="user-health-profile">
            <div className="text-wrapper-6">
              User Health
              <br /> Profile
            </div>
            <img
              className="img"
              src="img/icon-user-health-profile.png"
              alt="User Health Profile"
            />
          </div>
          <div className="interactive">
            <div className="text-wrapper-6">
              Interactive
              <br /> Educational
            </div>
            <img
              className="img"
              src="img/icon-interactive-educational.png"
              alt="Interactive Educational"
            />
          </div>
          <div className="nutrition-calender">
            <div className="nutrition-calender-2">
              Nutrition
              <br /> Calendar
            </div>
            <img
              className="icon-nutrition"
              src="img/icon-nutrition-calender.png"
              alt="Nutrition Calendar"
            />
          </div>
          <div className="health-data-report">
            <div className="text-wrapper-6">
              Final Report
              <br /> Program
            </div>
            <img
              className="icon-final-report"
              src="img/icon-final-report-program.png"
              alt="Final Report Program"
            />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-4">
            <div className="text-wrapper-7">Dashboard NutrieMom</div>
            <div className="text-wrapper-8">Latest Announcements</div>
            <img
              className="notifications"
              src="img/notifications.png"
              alt="Notifications"
            />
            <div className="overlap-5">
              <p className="welcome-to-nutriemom">
                Welcome to NutrieMom! Keep track of your health
                <br /> and your little one with ease.
              </p>
              <p className="fresh-nutrition-for">
                <span className="span">¡Fresh Nutrition for a <br /></span>
                <span className="text-wrapper-9">Brighter Future!</span>
              </p>
              <img
                className="icon-dashboard"
                src="img/icon-dashboard.png"
                alt="Dashboard"
              />
            </div>
            <div className="input-health-data-wrapper">
              <div className="input-health-data">
                <div className="input-your-health">
                  Input Your
                  <br /> Health Data
                </div>
                <img
                  className="icon-health-data"
                  src="img/icon-health-data.png"
                  alt="Input Health Data"
                />
              </div>
            </div>
            <div className="healtcare-post-wrapper">
              <div className="healtcare-post">
                <div className="text-wrapper-10">
                  Nearest health
                  <br /> care post
                </div>
                <img
                  className="icon-health-care"
                  src="img/icon-health-care-post.png"
                  alt="Health Care Post"
                />
              </div>
            </div>
            <div className="health-data-report-wrapper">
              <div className="health-data-report-2">
                <div className="text-wrapper-10">
                  Health Data
                  <br /> Report
                </div>
                <img
                  className="icon-health-data-2"
                  src="img/icon-health-data-report.png"
                  alt="Health Data Report"
                />
              </div>
            </div>
            <div className="overlap-group-2">
              <p className="p">Health checkup scheduled for tomorrow</p>
            </div>
            <div className="overlap-6">
              <p className="p">Weekly health progress report ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
