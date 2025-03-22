import React from "react";
import { Link } from "react-router-dom";

// Importing CSS From Global File
import "../css/sidebar.css";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
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
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
