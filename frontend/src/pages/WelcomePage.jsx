import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const WelcomePage = () => {
  return (
    <div className="MainContainer">
      <div className="TopBar">
        <h1 className="MainHeader">Welcome to Project Alpha Bowl</h1>
        <p>
          The one stop place to improve your your bowling scores and hit the
          esteemed 300.
        </p>
      </div>
      <div className="WelcomeBody">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div className="Footer">
        <div>
          Copyright ©
          <a className="lyj" href="https://github.com/leeyihjie">
            Lee Yih Jie
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
