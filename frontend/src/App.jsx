import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import MainHomePage from "./pages/MainHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>

          {/* Protected Routes */}
          <Route path="/home" element={<MainHomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
