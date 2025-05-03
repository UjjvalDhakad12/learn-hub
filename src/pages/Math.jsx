import React, { useEffect, useState } from "react";
import questionsData from "../math.js";
import "../styles/Math.css";
import Navbar from "../components/Navbar";

const generateQuestion = (level) => {
    const a = Math.floor(Math.random() * (10 + level * 5));
    const b = Math.floor(Math.random() * (10 + level * 5));
    const ops = ["+", "-", "*", "/"];
    const op = ops[Math.floor(Math.random() * ops.length)];

    let question = `${a} ${op} ${b}`;
    let answer;
    try {
        answer = eval(question);
        if (!Number.isFinite(answer)) throw new Error();
        answer = parseFloat(answer.toFixed(2));
    } catch {
        return generateQuestion(level); // try again
    }

    return { question, answer };
};

export default function Math() {
    const [level, setLevel] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const levelQuestions =
            level <= 3 ? questionsData[level] : Array.from({ length: 10 }, () => generateQuestion(level));
        setQuestions(levelQuestions);
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
        setUserAnswer("");
    }, [level]);

    const handleSubmit = () => {
        const correctAnswer = questions[currentIndex].answer;
        if (parseFloat(userAnswer) === correctAnswer) {
            setScore(score + 1);
        }

        if (currentIndex === 9) {
            setShowResult(true);
        } else {
            setCurrentIndex(currentIndex + 1);
            setUserAnswer("");
        }
    };

    const nextLevel = () => {
        if (level < 10) {
            setLevel(level + 1);
        } else {
            alert("🎉 You completed all levels!");
        }
    };

    return (
        <div className="quiz-container">
            
            <h2>Level {level}</h2>
            {!showResult ? (
                <div className="question-box">
                    <p>
                        Question {currentIndex + 1}: <strong>{questions[currentIndex]?.question}</strong>
                    </p>
                    <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Enter your answer"
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <div className="result-box">
                    <h3>Your Score: {score}/10</h3>
                    {score >= 5 ? (
                        <button onClick={nextLevel}>Next Level</button>
                    ) : (
                        <p style={{ color: "red" }}>Try Again! You need at least 5 to pass.</p>
                    )}
                </div>
            )}
        </div>
    );
}
