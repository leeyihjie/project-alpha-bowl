import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import MainHomePage from "./pages/MainHomePage";
import CalculatorPage from "./pages/CalculatorPage";

import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="MainAppContainer">
          <div className="bigapp">
            <Sidebar />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<WelcomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>

              {/* Protected Routes */}
              <Route path="/home" element={<MainHomePage />}></Route>
              <Route path="/calculator" element={<CalculatorPage />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
