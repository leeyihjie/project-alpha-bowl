import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

const MainHomePage = () => {
  const [b1scoref1, setb1scoref1] = useState("");
  const [b2scoref1, setb2scoref1] = useState("");
  const [scoretotalf1, setscoretotalf1] = useState("");

  const [b1scoref2, setb1scoref2] = useState("");
  const [b2scoref2, setb2scoref2] = useState("");
  const [scoretotalf2, setscoretotalf2] = useState("");

  const [b1scoref3, setb1scoref3] = useState("");
  const [b2scoref3, setb2scoref3] = useState("");
  const [scoretotalf3, setscoretotalf3] = useState("");

  const [b1scoref4, setb1scoref4] = useState("");
  const [b2scoref4, setb2scoref4] = useState("");
  const [scoretotalf4, setscoretotalf4] = useState("");

  const [b1scoref5, setb1scoref5] = useState("");
  const [b2scoref5, setb2scoref5] = useState("");
  const [scoretotalf5, setscoretotalf5] = useState("");

  const [b1scoref6, setb1scoref6] = useState("");
  const [b2scoref6, setb2scoref6] = useState("");
  const [scoretotalf6, setscoretotalf6] = useState("");

  const [b1scoref7, setb1scoref7] = useState("");
  const [b2scoref7, setb2scoref7] = useState("");
  const [scoretotalf7, setscoretotalf7] = useState("");

  const [b1scoref8, setb1scoref8] = useState("");
  const [b2scoref8, setb2scoref8] = useState("");
  const [scoretotalf8, setscoretotalf8] = useState("");

  const [b1scoref9, setb1scoref9] = useState("");
  const [b2scoref9, setb2scoref9] = useState("");
  const [scoretotalf9, setscoretotalf9] = useState("");

  const [b1scoref10, setb1scoref10] = useState("");
  const [b2scoref10, setb2scoref10] = useState("");
  const [scoretotalf10, setscoretotalf10] = useState("");

  /* Old set frame score function. Can look to implement this in future */
  // const setf1 = (score, id) => {
  //   const funcName = "setb2scoref" + `${id}`;
  //   console.log(funcName);
  //   if (score == "") {
  //     window[funcName](score);
  //   } else if (parseInt(score) == 0) {
  //     window[funcName](0);
  //   } else if (parseInt(score) >= 0 && parseInt(score) <= 10) {
  //     window[funcName](parseInt(score));
  //   } else {
  //     alert("Input a score only between 0 to 10");
  //   }
  // };

  const setb1 = (event, updateScoreb1, updateScoreb2) => {
    const b1score = event.target.value;
    if (b1score == "") {
    } else if (parseInt(b1score) >= 0 && parseInt(b1score) <= 9) {
      updateScoreb1(parseInt(b1score));
      updateScoreb2("");
    } else if (parseInt(b1score) == 10) {
      updateScoreb1("");
      updateScoreb2("X");
    } else {
      alert("Input a score only between 0 to 10");
    }
  };

  const setb2 = (
    event,
    updateScoreb1,
    updateScoreb2,
    updateTotalf1,
    b1score
  ) => {
    const b2score = event.target.value;
    if (b2score == "") {
    } else if (parseInt(b2score) >= 0 && parseInt(b2score) <= 9 - b1score) {
      updateScoreb2(parseInt(b2score));
      updateTotalf1(b1score + parseInt(b2score));
    } else if (parseInt(b2score) + b1score == 10) {
      updateScoreb2("/");
      updateTotalf1("");
    } else {
      alert(`Input a score only between 0 to ${10 - b1score}`);
      updateScoreb2("");
    }
  };

  const displayTotalScore = (totalscore) => {
    return <div>{totalscore}</div>;
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2>
          Welcome. Learn how to maximise your bowling score here with our
          interactive bowling score calculator.
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
                  type="text"
                  id="frame1-1"
                  value={b1scoref1}
                  onChange={(event) => setb1(event, setb1scoref1, setb2scoref1)}
                ></input>
              </div>
              <div className="indiv-scores" id="secondBall">
                <input
                  className="inputScores"
                  type="text"
                  id="frame1-2"
                  value={b2scoref1}
                  onChange={(event) =>
                    setb2(
                      event,
                      setb1scoref1,
                      setb2scoref1,
                      setscoretotalf1,
                      b1scoref1
                    )
                  }
                ></input>
              </div>
            </div>
            <div className="totalFrameScoreBox">
              {displayTotalScore(scoretotalf1)}
            </div>
          </div>
          <div className="frameBox" id="fno2">
            <div className="frameNoBox">Frame 2</div>
            <div className="middleScoreBox">
              <div className="indiv-scores" id="firstBall">
                <input
                  className="inputScores"
                  type="text"
                  id="frame2-1"
                  value={b1scoref2}
                  onChange={(event) => setb1(event, setb1scoref2)}
                ></input>
              </div>
              <div className="indiv-scores" id="secondBall">
                <input
                  className="inputScores"
                  type="text"
                  id="frame2-2"
                  value={b2scoref2}
                  onChange={(event) =>
                    setb2(event, setb2scoref2, b1scoref2, setscoretotalf2)
                  }
                ></input>
              </div>
            </div>
            <div className="totalFrameScoreBox">
              {displayTotalScore(scoretotalf2)}
            </div>
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
