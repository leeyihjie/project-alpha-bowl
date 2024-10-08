import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="list-unstyled text-center">
          {SidebarData.map((item, key) => {
            return (
              <li key={key} className="list-item">
                <Link className="sidebar-links" to={item.link}>
                  <div>{item.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
