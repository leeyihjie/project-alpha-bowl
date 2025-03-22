import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../css/welcomepage.css";

const WelcomePage = () => {
  return (
    <div className="WelcomeMainContainer">
      <div className="TopBar">
        <h1 className="MainHeader">Welcome</h1>
        <p className="SubHeader">Unlock your full potential here</p>
      </div>
      <div className="WelcomeBody">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
