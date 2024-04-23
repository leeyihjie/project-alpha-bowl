import React from "react";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

const MainHomePage = () => {
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

  const [scoreState10, setScoreState10] = useState({
    key: 10,
    text: "Frame 10",
    firstBallScore: "",
    secondBallScore: "",
    thirdBallScore: "",
    frameTotalScore: "",
    gameTotalScore: "",
  });

  const [maxScoreState, setMaxScoreState] = useState(300);

  // Function to update values for individual mapped frame states
  const updateFrameStates = (e, index) => {
    const { name, value, id } = e.target;
    const list = [...scoreState];

    if (id == 1) {
      var currB1score = list[index].firstBallScore;
      var score = value;
      var currScore = "";
      var otherBallScore = "";
      var storedFrameScore = "";

      if (name == "firstBallScore") {
        if (score > 9 || score < 0) {
          alert(
            "Please only input a score between 0 to 9 or x/X if you get a Strike"
          );
        }

        if (score == "X" || score == "x") {
          otherBallScore = "X";
          storedFrameScore = "10";
        } else {
          currScore = score;
        }

        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: otherBallScore,
          ["frameTotalScore"]: storedFrameScore,
        };
        setScoreState(list);
      } else if (name == "secondBallScore") {
        if (currB1score == "") {
          alert("Please input a score for the first ball throw first");
        } else if (parseInt(score) + parseInt(currB1score) > 10) {
          alert(
            `Input a score only between 0 to ${10 - parseInt(currB1score)}`
          );
        } else if (currB1score < 10) {
          if (score == "/") {
            currScore = score;
            otherBallScore = currB1score;
            storedFrameScore = "10";
          } else {
            currScore = score;
            otherBallScore = currB1score;
            storedFrameScore = parseInt(currB1score) + parseInt(score);
          }
        }
        list[index] = {
          ...list[index],
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
        };
        setScoreState(list);
      }
      // Updating totalScore state for first frame
      if (list[index].secondBallScore != "") {
        //update total gamescore @ current frame
        var updatedCurrFrameScore = parseInt(list[index].frameTotalScore);

        // Check to update max score
        if (score == "/") {
          var maxScore = (10 - parseInt(id)) * 30 + 20;
          setMaxScoreState(maxScore);
        } else if (score != "X") {
          var maxScore = (10 - parseInt(id)) * 30 + parseInt(storedFrameScore);
          setMaxScoreState(maxScore);
        }

        list[index] = {
          ...list[index],
          ["gameTotalScore"]: updatedCurrFrameScore,
        };

        setScoreState(list);
      }

      // Frame 2 specifically
    } else if (id == 2) {
      var currB1score = list[index].firstBallScore;
      var currB2score = list[index].secondBallScore;

      var score = value;
      var currScore = "";
      var otherBallScore = "";
      var storedFrameScore = "";

      // Update state of current frame
      if (name == "firstBallScore") {
        if (score > 9 || score < 0) {
          alert(
            "Please only input a score between 0 to 9 or x/X if you get a Strike"
          );
        }
        if (score == "X" || score == "x") {
          otherBallScore = "X";
          storedFrameScore = "10";
        } else if (score < 10 && currB2score == "") {
          currScore = score;
          storedFrameScore = score;
        }
        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: otherBallScore,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      } else if (name == "secondBallScore") {
        if (currB1score == "") {
          alert("Please input a score for the first throw first");
        } else {
          if (parseInt(score) + parseInt(currB1score) > 9) {
            alert(
              `Input a score only between 0 to ${
                9 - currB1score
              }. Input "/" if you get a spare.`
            );
          }
        }
        if (currB1score < 9 && score != "") {
          if (score == "/") {
            currScore = score;
            otherBallScore = list[index].firstBallScore;
            storedFrameScore = "10";
          } else {
            currScore = score;
            storedFrameScore = parseInt(currB1score) + parseInt(currScore);
            otherBallScore = currB1score;
          }

          list[index] = {
            ...list[index],
            ["firstBallScore"]: otherBallScore,
            ["secondBallScore"]: currScore,
            ["frameTotalScore"]: storedFrameScore,
          };

          setScoreState(list);
        }
      }

      // Updating totalScore state for current frame 2
      if (list[index].secondBallScore != "") {
        // Case 1: Prev frame was a strike "X"
        if (list[index - 1].secondBallScore == "X") {
          // Update Previous frame total gamescore
          var updatedPrevFrameScore =
            parseInt(list[index - 1].gameTotalScore) + // 10
            parseInt(list[index].frameTotalScore); // current framescore

          // if current frame score is spare, maximum score will be (number of frames left * 30) + Score of Previous Frame + 20
          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedPrevFrameScore) + 20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            // maximum score will be (number of frames left * 30) + Score of Previous Frame + Score of current frame
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(updatedPrevFrameScore) +
              parseInt(storedFrameScore);
            setMaxScoreState(maxScore);
          }

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
          // Case 2: Prev Frame was a spare "/", framescore is updated for next shot only
        } else if (list[index - 1].secondBallScore == "/") {
          // check if current frame is a strike "X"
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
              parseInt(list[index].firstBallScore); // score for first ball thrown for current frame 2
            // Check if current frame was a spare to calculate maximum score
            if (list[index].secondBallScore == "/") {
              var maxScore =
                (10 - parseInt(id)) * 30 + parseInt(updatedPrevFrameScore) + 20;
              setMaxScoreState(maxScore);
            } else if (list[index].secondBallScore != "X") {
              var maxScore =
                (10 - parseInt(id)) * 30 +
                parseInt(updatedPrevFrameScore) +
                parseInt(storedFrameScore);
              setMaxScoreState(maxScore);
            }
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

          // if frame 1 was an open frame
        } else {
          // only current frame 2 score will be updated
          var updatedCurrFrameScore =
            parseInt(list[index - 1].gameTotalScore) + //
            parseInt(list[index].frameTotalScore);
          list[index] = {
            ...list[index],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };
          setScoreState(list);

          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(list[index - 1].gameTotalScore) +
              20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedCurrFrameScore);
            setMaxScoreState(maxScore);
          }
        }
      }

      // Updating of score for rest of frames 3-9
    } else {
      var currB1score = list[index].firstBallScore;
      var currB2score = list[index].secondBallScore;

      var score = value;
      var currScore = "";
      var otherBallScore = "";
      var storedFrameScore = "";

      if (name == "firstBallScore") {
        if (score > 9 || score < 0) {
          alert(
            "Please only input a score between 0 to 9 or x/X if you get a Strike"
          );
        }
        if (score == "X" || score == "x") {
          currScore = "";
          otherBallScore = "X";
          storedFrameScore = "10";
        } else if (score < 10 && currB2score == "") {
          currScore = score;
          storedFrameScore = currScore;
        }
        list[index] = {
          ...list[index],
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: otherBallScore,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      } else if (name == "secondBallScore") {
        if (currB1score == "") {
          alert("Please input a score for the first throw first");
        } else {
          if (parseInt(score) + parseInt(currB1score) > 9) {
            alert(
              `Input a score only between 0 to ${
                9 - currB1score
              }. Input "/" if you get a spare.`
            );
          }
        }
        if (currB1score < 10 && score != "") {
          if (score == "/") {
            currScore = "/";
            otherBallScore = list[index].firstBallScore;
            storedFrameScore = "10";
          } else {
            currScore = score;
            storedFrameScore = parseInt(currB1score) + parseInt(currScore);
            otherBallScore = currB1score;
          }
        }

        list[index] = {
          ...list[index],
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
        };

        setScoreState(list);
      }

      // Updating of total displayed score for past two frames
      // contingent on whether there are strikes and spares
      if (list[index].secondBallScore != "") {
        // Case 1: Past 2 Frames were Strikes (XX)
        if (
          list[index - 2].secondBallScore == "X" &&
          list[index - 1].secondBallScore == "X"
        ) {
          // if current frame was a strike
          if (list[index].secondBallScore == "X") {
            // Update past 2nd frame totalscore
            var updatedPrev2ndFrameScore =
              parseInt(list[index - 2].gameTotalScore) + // 20 for prev 2nd frame
              parseInt(list[index].frameTotalScore); // total frame score for current frame

            // Update past frame totalscore
            var updatedPrevFrameScore =
              parseInt(updatedPrev2ndFrameScore) + // 30
              parseInt(list[index - 1].frameTotalScore) + // 10
              parseInt(list[index].frameTotalScore); // 10

            // Update current frame total score
            var updatedCurrFrameScore =
              parseInt(updatedPrevFrameScore) + // 50
              parseInt(list[index].frameTotalScore); // total frame score for current frame
          }

          // if current frame was a spare, we only consider the first shot for of current frame for updating of prev 2nd frame
          else if (list[index].secondBallScore == "/") {
            // Update past 2nd frame totalscore
            var updatedPrev2ndFrameScore =
              parseInt(list[index - 2].gameTotalScore) + // 20 for prev 2nd frame
              parseInt(list[index].firstBallScore); // first ball score for current frame

            // Update past frame totalscore
            var updatedPrevFrameScore =
              parseInt(updatedPrev2ndFrameScore) + // updated prev 2nd frame score
              parseInt(list[index - 1].frameTotalScore) + // 10
              parseInt(list[index].frameTotalScore); // 10

            // Update current frame total score
            var updatedCurrFrameScore =
              parseInt(updatedPrevFrameScore) + // 50
              parseInt(list[index].frameTotalScore); // total frame score for current frame
          } else {
            var updatedPrev2ndFrameScore =
              parseInt(list[index - 2].gameTotalScore) + // 20 for prev 2nd frame
              parseInt(list[index].firstBallScore); // first ball score for current frame

            // Update past frame totalscore
            var updatedPrevFrameScore =
              parseInt(updatedPrev2ndFrameScore) + // updated prev 2nd frame score
              parseInt(list[index - 1].frameTotalScore) + // 10
              parseInt(list[index].frameTotalScore); // 10

            // Update current frame total score
            var updatedCurrFrameScore =
              parseInt(updatedPrevFrameScore) + // 50
              parseInt(list[index].frameTotalScore); // total frame score for current frame
          }

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

          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(list[index - 1].gameTotalScore) +
              20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedCurrFrameScore);
            setMaxScoreState(maxScore);
          }

          // case 2: Past 2nd Frames was Spare and past Frame was strike (/X)
        } else if (
          list[index - 2].secondBallScore == "/" &&
          list[index - 1].secondBallScore == "X"
        ) {
          var updatedPrevFrameScore =
            parseInt(list[index - 1].gameTotalScore) +
            parseInt(list[index].frameTotalScore);

          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) +
            parseInt(list[index].frameTotalScore);

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

          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedPrevFrameScore) + 20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(updatedPrevFrameScore) +
              parseInt(storedFrameScore);
            setMaxScoreState(maxScore);
          }
        } else if (
          list[index - 2].secondBallScore == "X" &&
          list[index - 1].secondBallScore == "/"
        ) {
          if (list[index].secondBallScore == "X") {
            var updatedPrevFrameScore =
              parseInt(list[index - 1].gameTotalScore) +
              parseInt(list[index].frameTotalScore);
          } else {
            var updatedPrevFrameScore =
              parseInt(list[index - 1].gameTotalScore) +
              parseInt(list[index].firstBallScore);
          }

          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) +
            parseInt(list[index].frameTotalScore);

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

          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedPrevFrameScore) + 20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(updatedPrevFrameScore) +
              parseInt(storedFrameScore);
            setMaxScoreState(maxScore);
          }
        } else if (
          list[index - 2].secondBallScore == "/" &&
          list[index - 1].secondBallScore == "/"
        ) {
          if (list[index].secondBallScore == "X") {
            var updatedPrevFrameScore =
              parseInt(list[index - 1].gameTotalScore) +
              parseInt(list[index].frameTotalScore);
          } else {
            var updatedPrevFrameScore =
              parseInt(list[index - 1].gameTotalScore) +
              parseInt(list[index].firstBallScore);
          }
          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) +
            parseInt(list[index].frameTotalScore);

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

          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedPrevFrameScore) + 20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(updatedPrevFrameScore) +
              parseInt(storedFrameScore);
            setMaxScoreState(maxScore);
          }
        } else if (
          (list[index - 2].secondBallScore != "X" ||
            list[index - 2].secondBallScore != "/") &&
          list[index - 1].secondBallScore == "X"
        ) {
          var updatedPrevFrameScore =
            parseInt(list[index - 1].gameTotalScore) +
            parseInt(list[index].frameTotalScore);
          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) + parseInt(storedFrameScore);
          list[index - 1] = {
            ...list[index - 1],
            ["gameTotalScore"]: updatedPrevFrameScore,
          };
          list[index] = {
            ...list[index],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };
          setScoreState(list);
          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedPrevFrameScore) + 20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(updatedPrevFrameScore) +
              parseInt(storedFrameScore);
            setMaxScoreState(maxScore);
          }
        } else if (
          (list[index - 2].secondBallScore != "X" ||
            list[index - 2].secondBallScore != "/") &&
          list[index - 1].secondBallScore == "/"
        ) {
          var updatedPrevFrameScore =
            parseInt(list[index - 1].gameTotalScore) +
            parseInt(list[index].firstBallScore);
          var updatedCurrFrameScore =
            parseInt(updatedPrevFrameScore) + parseInt(storedFrameScore);
          list[index - 1] = {
            ...list[index - 1],
            ["gameTotalScore"]: updatedPrevFrameScore,
          };
          list[index] = {
            ...list[index],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };
          setScoreState(list);

          if (list[index].secondBallScore == "/") {
            var maxScore =
              (10 - parseInt(id)) * 30 + parseInt(updatedPrevFrameScore) + 20;
            setMaxScoreState(maxScore);
          } else if (list[index].secondBallScore != "X") {
            var maxScore =
              (10 - parseInt(id)) * 30 +
              parseInt(updatedPrevFrameScore) +
              parseInt(storedFrameScore);
            setMaxScoreState(maxScore);
          }
        } else {
          var updatedCurrFrameScore =
            parseInt(list[index - 1].gameTotalScore) +
            parseInt(list[index].frameTotalScore);

          list[index] = {
            ...list[index],
            ["gameTotalScore"]: updatedCurrFrameScore,
          };
          setScoreState(list);
        }
      }
    }
  };

  // Function to update values for Special Frame 10
  const updateFrameStates10 = (e) => {
    const { name, value, id } = e.target;
    const list = [...scoreState];

    var currB1score = scoreState10.firstBallScore;
    var currB2score = scoreState10.secondBallScore;
    var currB3score = scoreState10.thirdBallScore;

    var score = value;
    var currScore = "";
    var otherBallScore = "";
    var otherBallScore2 = "";
    var storedFrameScore = "";

    if (name == "firstBallScore") {
      if (score > 9 || score < 0) {
        alert(
          "Please only input a score between 0 to 9 or x/X if you get a Strike"
        );
      }
      if (score == "x" || score == "X") {
        currScore = "X";
        storedFrameScore = "10";
      } else if (score < 10 && currB2score == "") {
        currScore = score;
        storedFrameScore = currScore;
      }
      setScoreState10({
        ...scoreState10,
        ["firstBallScore"]: currScore,
        ["secondBallScore"]: otherBallScore,
        ["thirdBallScore"]: otherBallScore2,
        ["frameTotalScore"]: storedFrameScore,
      });
    } else if (name == "secondBallScore") {
      console.log("bb" + currB1score);
      if (currB1score == "") {
        alert("Please input a score for the first throw first");
      } else {
        if (currB1score == "X") {
          if (parseInt(score) > 9) {
            alert(
              "Input a score only between 0 to 9 or x/X if you get a Strike"
            );
          } else if (score == "x" || score == "X") {
            currScore = "X";
            otherBallScore = currB1score;
            storedFrameScore = parseInt(scoreState10.frameTotalScore) + 10;
          } else {
            currScore = score;
            otherBallScore = currB1score;
            storedFrameScore =
              parseInt(scoreState10.storedFrameScore) + parseInt(score);
          }
        } else {
          if (parseInt(score) + parseInt(currB1score) > 9) {
            alert(
              `Input a score only between 0 to ${
                9 - currB1score
              }. Input "/" if you get a spare.`
            );
          } else if (score == "/") {
            currScore = score;
            otherBallScore = currB1score;
            storedFrameScore = "10";
          } else {
            currScore = score;
            otherBallScore = currB1score;
            storedFrameScore =
              parseInt(scoreState10.firstBallScore) + parseInt(score);
          }
        }
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: currScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
        });
      }
    } else if (name == "thirdBallScore") {
      if (currB1score == "" || currB2score == "") {
        alert("Please input a score for the first and second throw first");
      } else if (currB2score == "X" || currB2score == "/") {
        if (parseInt(score) > 9 || parseInt(score) < 0) {
          alert("Input a score only between 0 to 9 or x/X if you get a Strike");
        } else if (score == "x" || score == "X") {
          currScore = "X";
          otherBallScore = currB1score;
          otherBallScore2 = currB2score;
          storedFrameScore = parseInt(scoreState10.frameTotalScore) + 10;
        } else {
          currScore = score;
          otherBallScore = currB1score;
          otherBallScore2 = currB2score;
          storedFrameScore =
            parseInt(scoreState10.frameTotalScore) + parseInt(score);
        }
      } else {
        if (parseInt(score) + parseInt(currB2score) > 9) {
          alert(
            `Input a score only between 0 to ${
              9 - currB2score
            }. Input "/" if you get a spare.`
          );
        } else if (score == "/") {
          currScore = score;
          otherBallScore = currB1score;
          otherBallScore2 = currB2score;
          storedFrameScore =
            parseInt(scoreState10.frameTotalScore) +
            (10 - parseInt(scoreState10.secondBallScore));
        } else {
          currScore = score;
          otherBallScore = currB1score;
          storedFrameScore =
            parseInt(scoreState10.frameTotalScore) + parseInt(score);
        }
      }
      setScoreState10({
        ...scoreState10,
        ["firstBallScore"]: otherBallScore,
        ["secondBallScore"]: otherBallScore2,
        ["thirdBallScore"]: currScore,
        ["frameTotalScore"]: storedFrameScore,
      });
    }

    // Update Displayed Total Score
    // Case 1: Past 2 Frames were Strikes (XX)
    if (list[7].secondBallScore == "X" && list[8].secondBallScore == "X") {
      if (name == "firstBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }
        // Update past 2nd frame totalscore
        var updatedPrev2ndFrameScore = // 30 for frame 1
          parseInt(list[7].gameTotalScore) + parseInt(scoreToAdd);

        // Update past frame totalscore
        var updatedPrevFrameScore =
          parseInt(updatedPrev2ndFrameScore) + // 30
          parseInt(list[8].frameTotalScore) + // 10
          parseInt(scoreToAdd); // 10

        console.log("UPFS " + updatedPrevFrameScore);

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(updatedPrevFrameScore) + // 50
          parseInt(scoreToAdd);

        // Update past 2nd frame totalscore state
        list[7] = {
          ...list[7],
          ["gameTotalScore"]: updatedPrev2ndFrameScore,
        };

        // Update past frame totalscore state
        list[8] = {
          ...list[8],
          ["gameTotalScore"]: updatedPrevFrameScore,
        };

        setScoreState(list);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: otherBallScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      } else if (name == "secondBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update 2nd past frame totalscore
        var updatedPrev2ndFrameScore =
          parseInt(list[8].gameTotalScore) + parseInt(scoreToAdd); // 10

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(updatedPrev2ndFrameScore) +
          parseInt(scoreState10.frameTotalScore) +
          parseInt(scoreToAdd);

        // Update past frame totalscore state
        list[8] = {
          ...list[8],
          ["gameTotalScore"]: updatedPrev2ndFrameScore,
        };
        setScoreState(list);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: currScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      }
    }
    if (list[7].secondBallScore != "X" && list[8].secondBallScore == "X") {
      if (name == "firstBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update past frame totalscore
        var updatedPrevFrameScore =
          parseInt(list[8].gameTotalScore) + // 10
          parseInt(scoreToAdd); // 10

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(updatedPrevFrameScore) + // 50
          parseInt(scoreToAdd);

        // Update past frame totalscore state
        list[8] = {
          ...list[8],
          ["gameTotalScore"]: updatedPrevFrameScore,
        };

        setScoreState(list);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: otherBallScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      } else if (name == "secondBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update 2nd past frame totalscore
        var updatedPrev2ndFrameScore =
          parseInt(list[8].gameTotalScore) + parseInt(scoreToAdd); // 10

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(updatedPrev2ndFrameScore) +
          parseInt(scoreState10.frameTotalScore) +
          parseInt(scoreToAdd);

        // Update past frame totalscore state
        list[8] = {
          ...list[8],
          ["gameTotalScore"]: updatedPrev2ndFrameScore,
        };
        setScoreState(list);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: currScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      } else if (name == "thirdBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(list[8].gameTotalScore) +
          parseInt(scoreState10.frameTotalScore) +
          parseInt(scoreToAdd);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: otherBallScore2,
          ["thirdBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      }
    } else if (list[8].secondBallScore == "/") {
      if (name == "firstBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update past frame totalscore
        var updatedPrevFrameScore =
          parseInt(list[8].gameTotalScore) + // 10
          parseInt(scoreToAdd); // 10

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(updatedPrevFrameScore) + // 50
          parseInt(scoreToAdd);

        // Update past frame totalscore state
        list[8] = {
          ...list[8],
          ["gameTotalScore"]: updatedPrevFrameScore,
        };

        setScoreState(list);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: otherBallScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      } else if (name == "secondBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else if (currScore == "/") {
          var scoreToAdd = 10 - parseInt(scoreState10.firstBallScore);
        } else {
          var scoreToAdd = score;
        }

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(list[8].gameTotalScore) +
          parseInt(scoreState10.frameTotalScore) + // 50
          parseInt(scoreToAdd);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: currScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      } else if (name == "thirdBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(list[8].gameTotalScore) +
          parseInt(scoreState10.frameTotalScore) +
          parseInt(scoreToAdd);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: otherBallScore2,
          ["thirdBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      }
    } else {
      if (name == "firstBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(list[8].gameTotalScore) + // 50
          parseInt(scoreToAdd);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: currScore,
          ["secondBallScore"]: otherBallScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      } else if (name == "secondBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else if (currScore == "/") {
          var scoreToAdd = 10 - parseInt(scoreState10.firstBallScore);
        } else {
          var scoreToAdd = score;
        }

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(list[8].gameTotalScore) +
          parseInt(scoreState10.frameTotalScore) +
          parseInt(scoreToAdd);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: currScore,
          ["thirdBallScore"]: otherBallScore2,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      } else if (name == "thirdBallScore") {
        if (currScore == "X") {
          var scoreToAdd = "10";
        } else {
          var scoreToAdd = score;
        }

        // Update current frame total score
        var updatedCurrFrameScore =
          parseInt(list[8].gameTotalScore) +
          parseInt(scoreState10.frameTotalScore) +
          parseInt(scoreToAdd);

        // Update current frame totalscore state
        setScoreState10({
          ...scoreState10,
          ["firstBallScore"]: otherBallScore,
          ["secondBallScore"]: otherBallScore2,
          ["thirdBallScore"]: currScore,
          ["frameTotalScore"]: storedFrameScore,
          ["gameTotalScore"]: updatedCurrFrameScore,
        });
      }
    }
  };

  const updateTotalScore = (index) => {
    const list = [...scoreState];

    return <div>{list[index].gameTotalScore}</div>;
  };

  const updateTotalScore10 = () => {
    return <div>{scoreState10.gameTotalScore}</div>;
  };

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

  const calculateMaxScore = () => {
    return <div>{maxScoreState}</div>;
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
                <div className="indiv-scores firstBall">
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
          <div
            className={
              "frameBox10 " +
              (isActive === 10 ? "activeFrameBox" : "inactiveFrameBox")
            }
            key={10}
          >
            <div className="frameNoBox">
              <Button variant="text" onClick={() => highlightCurrFrame(10)}>
                Frame 10
              </Button>
            </div>
            <div className="middleScoreBox">
              <div className="indiv-scores10 firstBall">
                <input
                  className="inputScores10"
                  type="text"
                  name="firstBallScore"
                  id={10}
                  value={scoreState10.firstBallScore}
                  onChange={(e) => updateFrameStates10(e)}
                ></input>
              </div>
              <div className="indiv-scores10 secondBall">
                <input
                  className="inputScores10"
                  type="text"
                  name="secondBallScore"
                  id={10}
                  value={scoreState10.secondBallScore}
                  onChange={(e) => updateFrameStates10(e)}
                ></input>
              </div>
              <div className="indiv-scores10  ">
                <input
                  className="inputScores10"
                  type="text"
                  name="thirdBallScore"
                  id={10}
                  value={scoreState10.thirdBallScore}
                  onChange={(e) => updateFrameStates10(e)}
                ></input>
              </div>
            </div>
            <div className="totalFrameScoreBox">{updateTotalScore10()}</div>
          </div>
          {/* <div className="frameBox" id="fnoHCP">
            <div className="frameNoBox">Handicap</div>
            <div className="HandicapBox">Handicap</div>
          </div> */}
          <div className="frameBox" id="fnoMAX">
            <div className="frameNoBox">Max Score</div>
            <div className="MaxScoreBox">{calculateMaxScore()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
