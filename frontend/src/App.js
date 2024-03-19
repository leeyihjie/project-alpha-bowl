import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
