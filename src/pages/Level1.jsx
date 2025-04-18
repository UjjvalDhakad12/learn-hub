import React, { useState, useEffect } from 'react';
import '../styles/Learn.css'

const Level = ({ questions, onComplete, onBack, color }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [showCompletion, setShowCompletion] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const correct = userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase();
        setIsCorrect(correct);
        if (correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setUserAnswer('');
                setIsCorrect(null);
            } else {
                setShowCompletion(true);
                setTimeout(() => {
                    onComplete();
                }, 3000);
            }
        }, 1000);
    };

    const progress = ((currentQuestion + (isCorrect !== null ? 1 : 0)) / questions.length) * 100;

    return (
        <div className="level-container">
            <button onClick={onBack} className="back-btn" style={{ backgroundColor: color }}>
                ← Back to Levels
            </button>

            {showCompletion ? (
                <div className="completion-animation">
                    <div className="confetti" style={{ backgroundColor: color }}></div>
                    <div className="confetti" style={{ backgroundColor: color }}></div>
                    <div className="confetti" style={{ backgroundColor: color }}></div>
                    <h2>Level Complete!</h2>
                    <p>Your score: {score}/{questions.length}</p>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: color
                            }}
                        ></div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: color
                            }}
                        ></div>
                    </div>

                    <div className="question-container">
                        <h2>Question {currentQuestion + 1} of {questions.length}</h2>
                        <p className="question">{questions[currentQuestion].question}</p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                className={`answer-input ${isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                                disabled={isCorrect !== null}
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="submit-btn"
                                style={{ backgroundColor: color }}
                                disabled={isCorrect !== null}
                            >
                                {isCorrect === null ? 'Submit' : (isCorrect ? '✓' : '✗')}
                            </button>
                        </form>

                        <div className="score">
                            Score: {score}/{currentQuestion + 1}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Level;