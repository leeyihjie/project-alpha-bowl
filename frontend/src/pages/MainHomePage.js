import React from "react";
import Box from "@mui/material/Box";

const MainHomePage = () => {
  const getFrameScore = () => {
    const firstBallScore = document.getElementById("firstBall").value;
    const secondBallScore = document.getElementById("secondBall").value;
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2>
          Welcome. Learn how to maximise your bowling score here with our
          bowling score calculator.
        </h2>
      </div>
      <div className="bowling-frames">
        <div className="indiv-frame">
          <div className="frameBox" id="fno1">
            <div className="frameNoBox">Frame 1</div>
            <div className="middleScoreBox">
              <div className="indiv-scores" id="firstBall">
                <input> </input>
              </div>
              <div className="indiv-scores" id="secondBall">
                7
              </div>
            </div>
            <div className="totalFrameScoreBox">9</div>
          </div>
          <div className="frameBox" id="fno2">
            <div className="frameNoBox">Frame 2</div>
          </div>
          <div className="frameBox" id="fno3">
            <div className="frameNoBox">Frame 3</div>
          </div>
          <div className="frameBox" id="fno4">
            <div className="frameNoBox">Frame 4</div>
          </div>
          <div className="frameBox" id="fno5">
            <div className="frameNoBox">Frame 5</div>
          </div>
          <div className="frameBox" id="fno6">
            <div className="frameNoBox">Frame 6</div>
          </div>
          <div className="frameBox" id="fno7">
            <div className="frameNoBox">Frame 7</div>
          </div>
          <div className="frameBox" id="fno8">
            <div className="frameNoBox">Frame 8</div>
          </div>
          <div className="frameBox" id="fno9">
            <div className="frameNoBox">Frame 9</div>
          </div>
          <div className="frameBox" id="fno10">
            <div className="frameNoBox">Frame 10</div>
          </div>
          <div className="frameBox" id="fnoHCP">
            <div className="frameNoBox">Handicap</div>
          </div>
          <div className="frameBox" id="fnoMAX">
            <div className="frameNoBox">Max Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
