import React from 'react';
import './Welcome.css';

const Welcome = ({ onStart }) => {
    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <h1 className="welcome-title">React Quiz Challenge</h1>
                <p className="welcome-description">
                    Test your knowledge of React fundamentals with our interactive quiz.
                    Are you ready to prove your skills?
                </p>
                <button className="start-button" onClick={onStart}>
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Welcome;
