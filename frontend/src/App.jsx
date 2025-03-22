import React from "react";

// CSS for globally accessible pages
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

// Global Accessible Pages
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

// Access Control Pages
import MainHomePage from "./pages/MainHomePage";
import CalculatorPage from "./pages/CalculatorPage";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="BodyContainer">
          <Sidebar />
          <div className="BodyContent">
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
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
