import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Instructions.css';

export default function PrimaryExamInstructions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="instruction-container">
      <div className="instructions">
        <h1>Welcome to the Elementary Quiz Zone!</h1>
        <p>
          Are you ready to test your knowledge and skills? This quiz will take
          you through a series of 60 challenging questions across various
          topics. Each question is designed to make you think and test your
          understanding.
        </p>
        <h2>Instructions:</h2>
        <ul>
          <li>The quiz consists of 60 multiple-choice questions.</li>
          <li>
            Each question has four choices. Select the one that you think is
            correct.
          </li>
          <li>
            Click on the label next to the answer choice to select your answer.
          </li>
          <li>You can only select one answer per question.</li>
          <li>Once you select an answer, you cannot change it.</li>
          <li>At the end of the quiz, your total score will be displayed.</li>
          <li>
            Make sure to answer all questions. Your progress will be shown as
            you go.
          </li>
          <li>You have two hours to finish the Quiz</li>
        </ul>
        <p>Good luck, and have fun!</p>
        <Link to="/exams/primary">
          <button className="instruction-button">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}
