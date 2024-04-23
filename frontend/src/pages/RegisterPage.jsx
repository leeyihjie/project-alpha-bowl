import React from "react";
import { useState, useEffect } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // register function when register button is clicked.
  const registerSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="registerform">
        <h1>Register for an Alpha Bowl account</h1>
        <form>
          {/* username */}
          <label>
            Employee ID:
            <input
              name="username"
              type="text"
              autoComplete="off"
              placeholder="Enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </label>
          <br />
          {/* password */}
          <label>
            Password:
            <input
              name="password"
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </label>
          <br />

          {/* FirstName */}
          <label>
            First Name:
            <input
              name="FirstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            ></input>
          </label>
          <br />

          {/* LastName */}
          <label>
            Last Name:
            <input
              name="LastName"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            ></input>
          </label>
          <br />

          {/* email */}
          <label>
            Email:
            <input
              name="email"
              type="email"
              placeholder="example@xxx.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
          </label>
          <br />

          <button type="button" onClick={registerSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
