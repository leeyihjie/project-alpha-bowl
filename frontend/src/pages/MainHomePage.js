import React from "react";
import Box from "@mui/material/Box";

const MainHomePage = () => {
  return (
    <>
      <div className="main-container">
        <h2>
          Welcome. Learn how to maximise your bowling score here with our
          bowling score calculator.
        </h2>
        <div className="bowling-frames">
          <div className="indi-frame">
            <div id="frame1">
              <Box
                sx={{
                  border: "2px solid red",
                  width: 50,
                  height: "50%",
                }}
              >
                1
              </Box>
              <Box
                sx={{
                  border: "2px solid red",
                  width: 50,
                  height: "50%",
                }}
              >
                2
              </Box>
              <Box
                sx={{
                  border: "2px solid red",
                  height: "50%",
                  width: "50%",
                  flex: 1,
                }}
              >
                3
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHomePage;
