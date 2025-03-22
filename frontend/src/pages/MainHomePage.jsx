import React from "react";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

const MainHomePage = () => {
  return (
    <div className="HomepageMainContainer">
      <div className="header">
        <div className="pab-header">
          <div className="pab-header-sub">
            <h3>It's time to level up your bowling game...</h3>
          </div>
          <div className="bowling-summary">
            Bowling is a target sport and recreational activity in which a
            player rolls a ball toward pins with the main aim of knocking over
            all pins. One of the more common types of bowling is known as
            "Ten-pin bowling"
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
