import React from "react";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

const MainHomePage = () => {
  // Function to handle input change
  // const handleInputFrame1 = (e) => {
  //   // input score value

  //   var currB1score = scoreState1.firstBallScore;
  //   var currScore = "";
  //   var currScore2 = "";
  //   var storedFrameScore = "";
  //   var totalScore = "";

  //   if (e.target.name == "firstBallScore") {
  //     currScore = e.target.value;

  //     if (parseInt(currScore) > 9 || parseInt(currScore) < 0) {
  //       alert(
  //         "Please only input a score between 0 to 9 or x/X if you get a Strike"
  //       );
  //       currScore = "";
  //     }

  //     if (currScore == "X" || currScore == "x") {
  //       currScore = "";
  //       currScore2 = "X";
  //       storedFrameScore = "10";
  //       totalScore = 10;
  //     }
  //     setScoreState1({
  //       ...scoreState1,
  //       ["firstBallScore"]: currScore,
  //       ["secondBallScore"]: currScore2,
  //       ["frameTotalScore"]: storedFrameScore,
  //       ["gameTotalScore"]: totalScore,
  //     });
  //   } else if (e.target.name == "secondBallScore") {
  //     currScore = e.target.value;
  //     if (currB1score == "") {
  //       alert("Please input a score for the first throw first");
  //       currScore = "";
  //     } else {
  //       if (parseInt(currScore) + parseInt(currB1score) > 10) {
  //         alert(`Input a score only between 0 to ${10 - currB1score}`);
  //         currScore = "";
  //       }
  //     }
  //     if (currB1score < 10) {
  //       if (currScore == "/") {
  //         currScore2 = "";
  //         currScore = "/";
  //         storedFrameScore = "10";
  //         totalScore = 10;
  //       } else {
  //         storedFrameScore = parseInt(currB1score) + parseInt(currScore);
  //         totalScore = storedFrameScore;
  //       }
  //     }
  //     setScoreState1({
  //       ...scoreState1,
  //       ["secondBallScore"]: currScore,
  //       ["frameTotalScore"]: storedFrameScore,
  //       ["gameTotalScore"]: totalScore,
  //     });
  //   }
  // };

  // Update total score for frame 1
  // const displayScore1 = () => {
  //   var displayedScore = "";
  //   var B1Score = scoreState1.firstBallScore;
  //   var B2Score = scoreState1.secondBallScore;

  //   if (B2Score == "X") {
  //     displayedScore = "10";
  //   } else if (B2Score == "/") {
  //     displayedScore = "10";
  //   } else if (B1Score < 10 && B2Score == "") {
  //     displayedScore = "";
  //   } else if (B1Score < 10 && B2Score != "") {
  //     displayedScore = parseInt(B1Score) + parseInt(B2Score);
  //   }

  //   return <div>{scoreState1.gameTotalScore}</div>;
  // };

  // Single useState hook to update input values as an obj for frames 1-9
  const [scoreState, setScoreState] = useState([
    {
      key: 1,
      text: "Frame 1",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 2,
      text: "Frame 2",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 3,
      text: "Frame 3",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 4,
      text: "Frame 4",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 5,
      text: "Frame 5",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 6,
      text: "Frame 6",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 7,
      text: "Frame 7",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 8,
      text: "Frame 8",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
    {
      key: 9,
      text: "Frame 9",
      firstBallScore: "",
      secondBallScore: "",
      frameTotalScore: "",
      gameTotalScore: "",
    },
  ]);

  // Function to update values for individual mapped frame states
  const updateFrameStates = (e, index) => {
    const { name, value, id } = e.target;
    const list = [...scoreState];

    if (id == 1) {
      var currB1score = list[index].firstBallScore;

      var score = value;

      var currScore = "";
      var currScore2 = "";
      var storedFrameScore = "";
      var totalScore = "";

      if (name == "firstBallScore") {
        currScore = score;

        if (currScore > 9 || currScore < 0) {
          alert(
            "Please only input a score between 0 to 9 or x/X if you get a Strike"
          );
          currScore = "";
        }

        if (currScore == "X" || currScore == "x") {
          currScore = "";
          currScore2 = "X";
          storedFrameScore = "10";
        }
        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: currScore2,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      } else if (name == "secondBallScore") {
        currScore = score;
        if (currB1score == "") {
          alert("Please input a score for the first throw first");
          currScore = "";
        } else {
          if (parseInt(currScore) + parseInt(currB1score) > 10) {
            alert(
              `Input a score only between 0 to ${10 - parseInt(currB1score)}`
            );
            currScore = "";
          }
        }
        if (currB1score < 10) {
          if (currScore == "/") {
            currScore2 = "";
            currScore = "/";
            storedFrameScore = "10";
          } else {
            storedFrameScore = parseInt(currB1score) + parseInt(currScore);
          }
        }
        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore2,
          ["secondBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      }
      // Updating totalScore state for first frame
      if (list[index].secondBallScore != "") {
        //update current frame total gamescore
        var updatedCurrFrameScore = parseInt(list[index].frameTotalScore);

        list[index] = {
          ...list[index],
          ["gameTotalScore"]: updatedCurrFrameScore,
        };

        setScoreState(list);
      }
    }

    if (id == 2) {
      var currB1score = list[index].firstBallScore;
      var currB2score = list[index].secondBallScore;

      var score = value;
      var currScore = "";
      var currScore2 = "";
      var storedFrameScore = "";
      var totalScore = "";

      // Update state of current frame
      if (name == "firstBallScore") {
        currScore = score;
        if (currScore > 9 || currScore < 0) {
          alert(
            "Please only input a score between 0 to 9 or x/X if you get a Strike"
          );
          currScore = "";
        }
        if (currScore == "X" || currScore == "x") {
          currScore = "";
          currScore2 = "X";
          storedFrameScore = "10";
        } else if (currScore < 10 && currB2score == "") {
          storedFrameScore = currScore;
        }
        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: currScore2,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      } else if (name == "secondBallScore") {
        currScore = score;

        if (currB1score == "") {
          alert("Please input a score for the first throw first");
          currScore = "";
        } else {
          if (parseInt(currScore) + parseInt(currB1score) > 9) {
            alert(
              `Input a score only between 0 to ${
                9 - currB1score
              }. Input "/" if you get a spare.`
            );
            currScore = "";
          }
        }
        if (currB1score < 10 && currScore != "") {
          if (currScore == "/") {
            storedFrameScore = "10";
            currScore = "/";
            currScore2 = list[index].firstBallScore;
          } else {
            storedFrameScore = parseInt(currB1score) + parseInt(currScore);
            currScore2 = currB1score;
          }
        }

        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore2,
          ["secondBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      }

      // Updating totalScore state for current frame
      if (list[index].secondBallScore != "") {
        // Case 1: Prev frame was a strike "X"
        if (list[index - 1].secondBallScore == "X") {
          // Update Previous frame total gamescore
          var updatedPrevFrameScore =
            parseInt(list[index - 1].gameTotalScore) + // 10
            parseInt(list[index].frameTotalScore); // current framescore

          list[index - 1] = {
            ...list[index - 1],
            ["gameTotalScore"]: updatedPrevFrameScore,
          };

          setScoreState(list);

          //update current frame total gamescore
          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) +
            parseInt(list[index].frameTotalScore);

          list[index] = {
            ...list[index],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };

          setScoreState(list);
          // Case 2: Prev Frame was a spare "/"
        } else if (list[index - 1].secondBallScore == "/") {
          // current frame is a strike "X"
          if (list[index].secondBallScore == "X") {
            // Update Previous frame total gamescore
            var updatedPrevFrameScore =
              parseInt(list[index - 1].gameTotalScore) + // 10
              parseInt(list[index].frameTotalScore); // 10
            // current frame not a strike !"X"
          } else {
            // Update Previous frame total gamescore

            var updatedPrevFrameScore =
              parseInt(list[index - 1].gameTotalScore) + //
              parseInt(list[index].firstBallScore); // score for first ball thrown for current frame
          }
          list[index - 1] = {
            ...list[index - 1],
            ["gameTotalScore"]: updatedPrevFrameScore,
          };

          setScoreState(list);

          //update current frame total gamescore

          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) + // uopdated prev frame score
            parseInt(list[index].frameTotalScore); //score for current frame

          list[index] = {
            ...list[index],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };

          setScoreState(list);
        }
      }
    } else if (id == 3) {
      var currB1score = list[index].firstBallScore;
      var currB2score = list[index].secondBallScore;

      var score = value;
      var currScore = "";
      var currScore2 = "";
      var storedFrameScore = "";
      var totalScore = "";

      if (name == "firstBallScore") {
        currScore = score;
        if (currScore > 9 || currScore < 0) {
          alert(
            "Please only input a score between 0 to 9 or x/X if you get a Strike"
          );
          currScore = "";
        }
        if (currScore == "X" || currScore == "x") {
          currScore = "";
          currScore2 = "X";
          storedFrameScore = "10";
        } else if (currScore < 10 && currB2score == "") {
          storedFrameScore = currScore;
        }
        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: currScore2,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      } else if (name == "secondBallScore") {
        currScore = score;

        if (currB1score == "") {
          alert("Please input a score for the first throw first");
          currScore = "";
        } else {
          if (parseInt(currScore) + parseInt(currB1score) > 9) {
            alert(
              `Input a score only between 0 to ${
                9 - currB1score
              }. Input "/" if you get a spare.`
            );
            currScore = "";
          }
        }
        if (currB1score < 10 && currScore != "") {
          if (currScore == "/") {
            storedFrameScore = "10";
            currScore = "/";
            currScore2 = list[index].firstBallScore;
          } else {
            storedFrameScore = parseInt(currB1score) + parseInt(currScore);
            currScore2 = currB1score;
          }
        }

        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore2,
          ["secondBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      }

      if (list[index].secondBallScore != "") {
        // Case 1: Past 2 Frames were Strikes (XX)
        if (
          list[index - 2].secondBallScore == "X" &&
          list[index - 1].secondBallScore == "X"
        ) {
          // Update past 2nd frame totalscore
          var updatedPrev2ndFrameScore = // 30 for frame 1
            parseInt(list[index - 2].gameTotalScore) +
            parseInt(list[index].frameTotalScore);

          // Update past frame totalscore
          var updatedPrevFrameScore =
            parseInt(updatedPrev2ndFrameScore) + // 30
            parseInt(list[index - 1].frameTotalScore) + // 10
            parseInt(list[index].frameTotalScore); // 10

          // Update current frame total score
          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) + // 50
            parseInt(list[index].frameTotalScore);
          // Update past 2nd frame totalscore state
          list[index - 2] = {
            ...list[index - 2],
            ["gameTotalScore"]: updatedPrev2ndFrameScore,
          };

          // Update past frame totalscore state
          list[index - 1] = {
            ...list[index - 1],
            ["gameTotalScore"]: updatedPrevFrameScore,
          };

          // Update current frame totalscore state
          list[index] = {
            ...list[index],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };

          setScoreState(list);
        } else if (list[index - 2].secondBallScore == "/") {
          if (list[index].secondBallScore == "X") {
            var updatedPrevFrameScore =
              parseInt(list[index - 2].gameTotalScore) +
              parseInt(list[index].frameTotalScore);
          } else if (list[index].secondBallScore == "/") {
            var updatedPrevFrameScore =
              parseInt(list[index - 2].gameTotalScore) +
              parseInt(list[index].firstBallScore);
          } else {
            var updatedPrevFrameScore =
              parseInt(list[index - 2].gameTotalScore) +
              parseInt(list[index].firstBallScore);
          }
          list[index - 2] = {
            ...list[index - 2],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };

          list[index] = {
            ...list[index],
            ["gameTotalScore"]:
              parseInt(updatedPrevFrameScore) +
              parseInt(list[index].frameTotalScore),
          };
        }
      }
    }
  };

  const updateTotalScore = (index) => {
    const list = [...scoreState];

    return <div>{list[index].gameTotalScore}</div>;
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
          {/* <div
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
                  id="1"
                  name="firstBallScore"
                  value={scoreState1.firstBallScore}
                  onChange={handleInputFrame1}
                ></input>
              </div>
              <div className="indiv-scores" id="secondBall">
                <input
                  className="inputScores"
                  type="text"
                  id="1"
                  name="secondBallScore"
                  value={scoreState1.secondBallScore}
                  onChange={handleInputFrame1}
                ></input>
              </div>
            </div>
            <div className="totalFrameScoreBox">{displayScore1()}</div>
          </div> */}
          {scoreState.map((frame, index) => (
            <div
              className={
                "frameBox " +
                (isActive === frame.key ? "activeFrameBox" : "inactiveFrameBox")
              }
              key={frame.key}
            >
              <div className="frameNoBox">
                <Button
                  variant="text"
                  onClick={() => highlightCurrFrame(frame.key)}
                >
                  {frame.text}
                </Button>
              </div>
              <div className="middleScoreBox">
                <div className="indiv-scores">
                  <input
                    className="inputScores"
                    type="text"
                    name="firstBallScore"
                    id={frame.key}
                    value={frame.firstBallScore}
                    onChange={(e) => updateFrameStates(e, index)}
                  ></input>
                </div>
                <div className="indiv-scores">
                  <input
                    className="inputScores"
                    type="text"
                    name="secondBallScore"
                    id={frame.key}
                    value={frame.secondBallScore}
                    onChange={(e) => updateFrameStates(e, index)}
                  ></input>
                </div>
              </div>
              <div className="totalFrameScoreBox">
                {updateTotalScore(index)}
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
