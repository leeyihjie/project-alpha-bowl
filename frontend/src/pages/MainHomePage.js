import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

const MainHomePage = () => {
  const [f1score, setf1score] = useState("");
  const [f2score, setf2score] = useState("");
  const [totalscore, settotalscore] = useState("");

  const displayf1Score = (score) => {
    if (score == "") {
      setf1score(score);
    } else if (parseInt(score) >= 0 && parseInt(score) <= 10) {
      setf1score(parseInt(score));
    } else {
      alert("Input a score only between 0 to 10");
    }
  };
  const displayf2Score = (score) => {
    if (score == "") {
      setf2score(score);
    } else if (parseInt(score) >= 0 && parseInt(score) <= 10 - f1score) {
      setf2score(parseInt(score));
    } else {
      alert(`Input a score only between 0 to ${10 - f1score}`);
    }
  };

  const displayTotalScore = (f1score, f2score) => {
    var totalScore = f1score + f2score;
    return <div>{totalScore}</div>;
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
                <input
                  className="inputScores"
                  type="number"
                  id="frame1-1"
                  value={f1score}
                  onChange={(event) => displayf1Score(event.target.value)}
                ></input>
              </div>
              <div className="indiv-scores" id="secondBall">
                <input
                  className="inputScores"
                  type="number"
                  id="frame1-2"
                  value={f2score}
                  onChange={(event) => displayf2Score(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="totalFrameScoreBox">
              {displayTotalScore(f1score, f2score)}
            </div>
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
