import React from "react";
import "./App.css";
import { questions } from "./questions";
import { useState } from "react";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          Your score is {score} out of {questions.length}        
        </section>
    
      ) : (
        <>
          <section className="header">
          OptimalArabic.
          </section>
          <section className="h1">   
          اختبار صغير 1: الدرس الأول - دورة الإعراب للمبتدئين 
          </section>
          <section className="footer">   
            <b>بسم الله الرحمن الرحيم</b> 
            <br></br>
            <b>أيها الطالب !</b> 
            <br></br>
                1.     استعن بالله
                <br></br>
                2. اعلم أنّ    كل سؤال يحتسب علامة (1) واحدة 
          </section>

          <section className="question-section">
            <h1>
              سؤال {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
