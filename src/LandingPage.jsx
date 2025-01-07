import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to the AI Phone Agent</h1>
      <p>
        Experience the future of automated conversations with our AI-powered phone agent.
        Click below to start interacting!
      </p>
      <Link to="/agent" className="enter-button">Enter</Link>
    </div>
  );
};

export default LandingPage;
