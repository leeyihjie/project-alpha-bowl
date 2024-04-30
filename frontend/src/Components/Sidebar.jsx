import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          {SidebarData.map((item, key) => {
            return (
              <li key={key}>
                <Link to={item.link}>
                  <span>{item.title}</span>
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
