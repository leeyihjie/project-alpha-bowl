import React from "react";
import "../css/global.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary 
      border-bottom border-secondary"
        >
          <a className="navbar-brand ms-2 mr-2" href="/">
            <img
              src="public/bowling-browser-icon.png"
              alt=""
              width="33"
              height="28"
              className="d-inline-block align-text-top"
            />
            Project Alpha Bowl
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
