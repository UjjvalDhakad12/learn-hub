import React from 'react'
import '../styles/Overview.css'
import Overnav from '../components/Overnav'
import { useNavigate } from "react-router-dom";

const Overview = () => {
    const navigate = useNavigate();

    const handlePlayNow = () => {
        navigate("/register");
    };

    const subjects = [
        {
            title: "Math Learning",
            description: "Start learning math from the very basics. Ideal for students of all ages. Build your foundation step-by-step.",
            levels: ["Beginner", "Intermediate", "Advanced"]
        },
        {
            title: "English Learning",
            description: "Improve your English from zero to fluent. Learn grammar, vocabulary, reading and speaking with fun lessons.",
            levels: ["Beginner", "Intermediate", "Advanced"]
        }
    ];

    return (
        <div>
            <Overnav />
            <div className="overview-container">
                <h1 className="page-title">Start Learning from Zero</h1>
                <div className="card-container">
                    {subjects.map((subject, index) => (
                        <div className="learning-card" key={index}>
                            <h2>{subject.title}</h2>
                            <p>{subject.description}</p>
                            <div className="levels">
                                {subject.levels.map((level, i) => (
                                    <span className="level-tag" key={i}>{level}</span>
                                ))}
                            </div>
                            <button className="play-btn" onClick={handlePlayNow}>Play Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Overview;
