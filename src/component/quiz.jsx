import React, { useState } from 'react'
import QuestionList from './QuestionList'
import './Quiz1.css'

export default function Quiz() {
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the capital of India?",
      options: ["Pune", "Delhi", "Japan", "Sun"],
      answer: "Delhi"
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
    <>
      <div>
        {currentQuestion < questions.length ?
          <div>
            <QuestionList question={questions[currentQuestion].question}
              options={questions[currentQuestion].options} handleOptionClick={handleOptionClick} currentAnswer={currentAnswer}
            />
            <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next </button>
          </div>
          : (
            <div>
              <h2>Quiz Completed!</h2>
              <p>Final Score: {score}</p>
            </div>
          )}
      </div>
    </>
  )
}
