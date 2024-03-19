import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import API from "../API/axiosAPI";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // To be used to display whatever error to user when logging in.
  // Input this as a seperate <div>
  const [error, setError] = useState("");

  // login function when login button is clicked.
  // takes input username and password and sends it as a JSON object
  // to the backend
  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const authData = {
        Username: username,
        Password: password,
      };

      // console message to show us login data submitted by user
      console.log(
        `Login Data submitted: Username = ${username}, Password = ${password}`
      );

      // Response is the response body returned by the backend
      // after validating the submitted login data by the user
      const response = await API.post("/login", authData);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div className="loginForm">
      <h1>Sign In Here</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            autoComplete="off"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="button" onClick={loginSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
