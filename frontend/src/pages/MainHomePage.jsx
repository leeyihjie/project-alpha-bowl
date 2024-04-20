import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";

const MainHomePage = () => {
  // Component for Frame

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

  // const setb1 = (event, updateScoreb1, updateScoreb2) => {
  //   const b1score = event.target.value;
  //   if (b1score == "") {
  //   } else if (parseInt(b1score) >= 0 && parseInt(b1score) <= 9) {
  //     updateScoreb1(parseInt(b1score));
  //     updateScoreb2("");
  //   } else if (parseInt(b1score) == 10) {
  //     updateScoreb1("");
  //     updateScoreb2("X");
  //   } else {
  //     alert("Input a score only between 0 to 10");
  //   }
  // };

  // const setb2 = (
  //   event,
  //   updateScoreb1,
  //   updateScoreb2,
  //   updateTotalf1,
  //   b1score
  // ) => {
  //   const b2score = event.target.value;
  //   if (b2score == "") {
  //   } else if (parseInt(b2score) >= 0 && parseInt(b2score) <= 9 - b1score) {
  //     updateScoreb2(parseInt(b2score));
  //     updateTotalf1(b1score + parseInt(b2score));
  //   } else if (parseInt(b2score) + b1score == 10) {
  //     updateScoreb2("/");
  //     updateTotalf1("");
  //   } else {
  //     alert(`Input a score only between 0 to ${10 - b1score}`);
  //     updateScoreb2("");
  //   }
  // };

  // State for FRAME 1 as scoring is different for first frame
  const [scoreState1, setScoreState1] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });

  // Function to handle input change
  const handleInputFrame1 = (e) => {
    // input score value

    var currB1score = scoreState1.firstBallScore;
    var currScore = "";
    var storedTotalScore = "";

    if (e.target.name == "firstBallScore") {
      currScore = e.target.value;

      if (parseInt(currScore) > 10) {
        alert("Please only input a score between 0 to 10");
        currScore = "";
      }
    } else if (e.target.name == "secondBallScore") {
      currScore = e.target.value;
      if (currB1score == "") {
        alert("Please input a score for the first throw first");
        currScore = "";
      } else {
        if (parseInt(currScore) + parseInt(currB1score) > 10) {
          alert(`Input a score only between 0 to ${10 - currB1score}`);
          currScore = "";
        }
      }
      if (currB1score == 10) {
        storedTotalScore = "X";
      } else if (currB1score < 10 && currScore != "") {
        if (parseInt(currB1score) + parseInt(currScore) == 10) {
          storedTotalScore = "/";
        } else {
          storedTotalScore = parseInt(currB1score) + parseInt(currScore);
        }
      }
    }

    setScoreState1({
      ...scoreState1,
      [e.target.name]: currScore,
      ["totalScore"]: storedTotalScore,
    });
  };

  // Update total score for frame 1
  const displayTotalScore = () => {
    var displayedScore = "";
    var storedTotalScore = "";
    var B1Score = scoreState1.firstBallScore;
    var B2Score = scoreState1.secondBallScore;

    if (B1Score == 10) {
      displayedScore = "X";
      storedTotalScore = "X";
    } else if (B1Score < 10 && B2Score == "") {
      displayedScore = "";
    } else if (B1Score < 10 && B2Score != "") {
      if (parseInt(B1Score) + parseInt(B2Score) == 10) {
        displayedScore = "/";
        storedTotalScore = "/";
      } else {
        displayedScore = parseInt(B1Score) + parseInt(B2Score);
        storedTotalScore = parseInt(B1Score) + parseInt(B2Score);
      }
    }

    return <div>{displayedScore}</div>;
  };

  // Single useState hook to update input values as an obj for frames 2-9
  const [scoreState2, setScoreState2] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });
  const [scoreState3, setScoreState3] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });
  const [scoreState4, setScoreState4] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });
  const [scoreState5, setScoreState5] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });
  const [scoreState6, setScoreState6] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });
  const [scoreState7, setScoreState7] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });
  const [scoreState8, setScoreState8] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });
  const [scoreState9, setScoreState9] = useState({
    firstBallScore: "",
    secondBallScore: "",
    totalScore: "",
  });

  // Function to get input values for mapped frames
  const handleChange = (e, frameid, num) => {
    updateFrameStates(e.target.value, frameid, e.target.name, num);
  };

  // Function to update values for individual mapped frame states
  const updateFrameStates = (score, frameid, name, num) => {
    console.log("1name: " + name);
    console.log("1s: " + score);

    var currB1score = `scoreState${num}`.firstBallScore;
    var currB2score = `scoreState${num}`.secondBallScore;
    var currScore = "";
    var totalscore = "";

    if (name == "firstBallScore") {
      currScore = score;

      if (parseInt(currScore) > 10) {
        alert("Please only input a score between 0 to 10");
        currScore = "";
      } else if (parseInt(currScore) <= 10 && parseInt(currScore) >= 0) {
        totalscore = currScore;
      }
    }

    if (name == "secondBallScore") {
      if (`scoreState${num}`.firstBallScore == "") {
        alert("Please input a score for the first throw first");
        currScore = "";
      } else {
        currScore = score;
        if (
          parseInt(currScore) + parseInt(`scoreState${num}`.firstBallScore) >
          10
        ) {
          alert(
            `Input a score only between 0 to ${
              10 - `scoreState${num}`.firstBallScore
            }`
          );
          currScore = "";
        } else {
          currScore = score;
        }
        totalscore =
          parseInt(`scoreState${num}`.firstBallScore) + parseInt(currScore);
      }
    }

    switch (true) {
      case num == 2:
        setScoreState2({
          ...scoreState2,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
      case num == 3:
        setScoreState3({
          ...scoreState3,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
      case num == 4:
        setScoreState4({
          ...scoreState4,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
      case num == 5:
        setScoreState5({
          ...scoreState5,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
      case num == 6:
        setScoreState6({
          ...scoreState6,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
      case num == 7:
        setScoreState7({
          ...scoreState7,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
      case num == 8:
        setScoreState8({
          ...scoreState8,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
      case num == 9:
        setScoreState9({
          ...scoreState9,
          [name]: currScore,
          ["totalScore"]: totalscore,
        });
        break;
    }
  };

  const updateTotalScore = (num) => {
    var displayedScore = "";

    if (`scoreState${num - 1}`.totalScore == "") {
    }

    if (scoreState1.firstBallScore == 10) {
      displayedScore = "X";
    } else if (
      scoreState1.firstBallScore < 10 &&
      scoreState1.secondBallScore == ""
    ) {
      displayedScore = "";
    } else if (
      scoreState1.firstBallScore < 10 &&
      scoreState1.secondBallScore != ""
    ) {
      if (
        parseInt(scoreState1.firstBallScore) +
          parseInt(scoreState1.secondBallScore) ==
        10
      ) {
        displayedScore = "/";
      } else {
        displayedScore =
          parseInt(scoreState1.firstBallScore) +
          parseInt(scoreState1.secondBallScore);
      }
    }

    return <div>{displayedScore}</div>;
  };

  const myframeList = [
    { id: "frame2", text: "Frame 2", num: "2" },
    { id: "frame3", text: "Frame 3", num: "3" },
    { id: "frame4", text: "Frame 4", num: "4" },
    { id: "frame5", text: "Frame 5", num: "5" },
    { id: "frame6", text: "Frame 6", num: "6" },
    { id: "frame7", text: "Frame 7", num: "7" },
    { id: "frame8", text: "Frame 8", num: "8" },
    { id: "frame9", text: "Frame 9", num: "9" },
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
                  value={scoreState1.firstBallScore}
                  onChange={handleInputFrame1}
                ></input>
              </div>
              <div className="indiv-scores" id="secondBall">
                <input
                  className="inputScores"
                  type="text"
                  id="frame1-2"
                  name="secondBallScore"
                  value={scoreState1.secondBallScore}
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
              key={f.id}
            >
              <div className="frameNoBox">
                <Button variant="text" onClick={() => highlightCurrFrame(f.id)}>
                  {f.text}
                </Button>
              </div>
              <div className="middleScoreBox">
                <div className="indiv-scores">
                  <input
                    className="inputScores"
                    type="text"
                    name="firstBallScore"
                    value={`scoreState${f.num}`.firstBallScore}
                    onChange={(e) => handleChange(e, f.id, f.num)}
                  ></input>
                </div>
                <div className="indiv-scores">
                  <input
                    className="inputScores"
                    type="text"
                    name="secondBallScore"
                    value={`scoreState${f.num}`.secondBallScore}
                    onChange={(e) => handleChange(e, f.id, f.num)}
                  ></input>
                </div>
              </div>
              <div className="totalFrameScoreBox">
                {updateTotalScore(f.num)}
              </div>
            </div>
          ))}

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
