import React, { useState } from 'react'
import QuestionList from './QuestionList'
import './Quiz1.css'

export default function Quiz() {
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "What file format is used for defining React components?",
      options: [".html", ".jsx", ".jsm", ".react"],
      answer: ".jsx"
    },

    {
      question: " What is React primarily used for?",
      options: ["Backend development", "Creating server-side logic", "Building user interfaces", "Managing databasesat"],
      answer: "Building user interfaces"
    },
    {
      question: " Which of the following is a top-level API provided by React?",
      options: ["React.renderComponent", "React.createElement", "React.initialize", "React.setupComponent"],
      answer: "React.createElement"
    },
    {
      question: " What command is used to create a new React app using the React CLI?",
      options: ["react-init", "react-new-app", "npx create-react-app", "npm install react-app"],
      answer: "npx create-react-app"
    }

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const handleOptionClick = (option) => {
    setCurrentAnswer(option)
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  }
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setCurrentAnswer(null);
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {currentQuestion < questions.length ?
          <div>
            <QuestionList question={questions[currentQuestion].question}
              options={questions[currentQuestion].options} handleOptionClick={handleOptionClick} currentAnswer={currentAnswer}
            />
            <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next </button>
          </div>
          : (
            <div className="score-section">
              <h2>Quiz Completed!</h2>
              <p>Final Score: {score}</p>
            </div>
          )}
      </div>
    </div>
  )
}
