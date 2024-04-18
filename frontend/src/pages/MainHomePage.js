import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const MainHomePage = () => {
  // Component for Frame

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

  // FOR FRAME 1
  const [frame1Score, setframe1Score] = useState({
    active: "",
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });

  // Function to handle input change
  const handleInputFrame1 = (e) => {
    console.log("name:" + e.target.name);
    console.log("value" + e.target.value);
    console.log("is active:" + isActive);
    var f1score = e.target.value;

    var b1score = 0;
    var b2score = 0;

    if (e.target.name == "firstBallScore") {
      var b1score = f1score;

      if (b1score == "") {
        var totalscore = "";
      } else {
        var b1score = parseInt(f1score);
      }

      if (frame1Score.secondBallScore == "") {
        var totalscore = b1score + 0;
      } else {
        var totalscore = b1score + parseInt(frame1Score.secondBallScore);
      }
    } else if (e.target.name == "secondBallScore") {
      if (frame1Score.firstBallScore == "") {
        alert("Please fill in first ball throw first");
        f1score = "";
        var totalscore = "";
      } else {
        var b2score = parseInt(f1score);
        var totalscore = parseInt(frame1Score.firstBallScore) + b2score;
      }
    }

    if (totalscore)
      setframe1Score({
        ...frame1Score,
        active: isActive,
        [e.target.name]: f1score,
        ["totalScore"]: totalscore,
      });
  };

  // Single useState hook to update input values as an obj
  const [scoreState, setScoreState] = useState({
    active: "",
    frameNo: "",
    firstBallScore: "",
    secondBallScore: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    console.log(isActive);
    const score = e.target.value;

    setScoreState({
      active: isActive,
      [e.target.name]: score,
    });
  };

  const updateTotalScore = (frameno) => {};

  const displayTotalScore = () => {
    return <div>{frame1Score.totalScore}</div>;
  };

  const myframeList = [
    { id: "Frame2", text: "Frame 2" },
    { id: "Frame3", text: "Frame 3" },
    { id: "Frame4", text: "Frame 4" },
    { id: "Frame5", text: "Frame 5" },
    { id: "Frame6", text: "Frame 6" },
    { id: "Frame7", text: "Frame 7" },
    { id: "Frame8", text: "Frame 8" },
    { id: "Frame9", text: "Frame 9" },
  ];

  // State for Currently Selected Frame
  const [isActive, setIsActive] = useState("");

  // Function to Update Current Frame Number on Click and Highlight
  // Current State

  const highlightCurrFrame = (frameid) => {
    // set currFrameNo to currently selected Frame
    setIsActive(frameid);

    // Return set Div to change background colour
    // const currFrameDiv = document.getElementById(currFrameNo);
    // currFrameDiv.style.backgroundColor = "white";
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
          <div
            className={
              "frameBox " +
              (isActive === "Frame1" ? "activeFrameBox" : "inactiveFrameBox")
            }
            id="Frame1"
          >
            <div className="frameNoBox">
              <Button
                variant="text"
                onClick={() => highlightCurrFrame("Frame1")}
              >
                Frame 1
              </Button>
            </div>
            <div className="middleScoreBox">
              <div className="indiv-scores" id="firstBall">
                <input
                  className="inputScores"
                  type="text"
                  id="frame1-1"
                  name="firstBallScore"
                  value={frame1Score.firstBallScore}
                  onChange={handleInputFrame1}
                ></input>
              </div>
              <div className="indiv-scores" id="secondBall">
                <input
                  className="inputScores"
                  type="text"
                  id="frame1-2"
                  name="secondBallScore"
                  value={frame1Score.secondBallScore}
                  onChange={handleInputFrame1}
                ></input>
              </div>
            </div>
            <div className="totalFrameScoreBox">{displayTotalScore()}</div>
          </div>
          {myframeList.map((f, index) => (
            <div
              className={
                "frameBox " +
                (isActive === f.id ? "activeFrameBox" : "inactiveFrameBox")
              }
              id={f.id}
            >
              <div className="frameNoBox">
                <Button variant="text" onClick={() => highlightCurrFrame(f.id)}>
                  {f.text}
                </Button>
              </div>
              <div className="middleScoreBox">
                <div
                  className="indiv-scores"
                  type="text"
                  id={isActive + "-1"}
                  name="firstBallScore"
                  value={scoreState.firstBallScore}
                  onChange={handleInputChange}
                >
                  <input className="inputScores" id></input>
                </div>
                <div className="indiv-scores" type="text" id={isActive + "-2"}>
                  <input className="inputScores"></input>
                </div>
              </div>
              <div className="totalFrameScoreBox">
                {/* {displayTotalScore(scoretotalf1)} */}
              </div>
            </div>
          ))}
          <div className={"frameBox "} id="2">
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
            <div className="totalFrameScoreBox">{}</div>
          </div>
          {/* <div className="frameBox" id="3">
            <div className="frameNoBox">Frame 3</div>
          </div>
          <div className="frameBox" id="4">
            <div className="frameNoBox">Frame 4</div>
          </div>
          <div className="frameBox" id="5">
            <div className="frameNoBox">Frame 5</div>
          </div>
          <div className="frameBox" id="6">
            <div className="frameNoBox">Frame 6</div>
          </div>
          <div className="frameBox" id="7">
            <div className="frameNoBox">Frame 7</div>
          </div>
          <div className="frameBox" id="8">
            <div className="frameNoBox">Frame 8</div>
          </div>
          <div className="frameBox" id="9">
            <div className="frameNoBox">Frame 9</div>
          </div> */}
          <div className="frameBox" id="10">
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
