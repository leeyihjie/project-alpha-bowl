import React from "react";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-md">
          <a className="navbar-brand ms-2 mr-2" href="/home">
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
