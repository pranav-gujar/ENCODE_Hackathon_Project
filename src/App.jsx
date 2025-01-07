import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import AiPhoneAgent from "./AiPhoneAgent";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/agent" element={<AiPhoneAgent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
