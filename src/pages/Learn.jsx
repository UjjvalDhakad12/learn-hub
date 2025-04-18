import React, { useState } from 'react';
import { mathData } from '../Math';
import { englishData } from '../English';
import '../styles/Learn.css'
import Level from '../pages/Level1';

const Learn = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [unlockedLevels, setUnlockedLevels] = useState({
        math: { addition: 1, subtraction: 1, multiplication: 1, division: 1, fractions: 1 },
        english: { vocabulary: 1, grammar: 1, reading: 1, writing: 1, speaking: 1 }
    });

    const subjects = {
        math: {
            name: "Math",
            sections: ["Addition", "Subtraction", "Multiplication", "Division", "Fractions"],
            icon: "🧮",
            color: "#FF6B6B"
        },
        english: {
            name: "English",
            sections: ["Vocabulary", "Grammar", "Reading", "Writing", "Speaking"],
            icon: "📚",
            color: "#4ECDC4"
        }
    };

    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
        setSelectedSection(null);
        setSelectedLevel(null);
    };

    const handleSectionSelect = (section) => {
        setSelectedSection(section.toLowerCase());
        setSelectedLevel(null);
    };

    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
    };

    const handleLevelComplete = (subject, section, nextLevel) => {
        setUnlockedLevels(prev => ({
            ...prev,
            [subject]: {
                ...prev[subject],
                [section]: Math.max(prev[subject][section], nextLevel)
            }
        }));
        setSelectedLevel(null);
    };

    const renderLevelButtons = () => {
        if (!selectedSubject || !selectedSection) return null;

        const levels = [];
        const maxUnlocked = unlockedLevels[selectedSubject][selectedSection];

        for (let i = 1; i <= 5; i++) {
            levels.push(
                <button
                    key={i}
                    onClick={() => handleLevelSelect(`level${i}`)}
                    disabled={i > maxUnlocked}
                    className={`level-btn ${i > maxUnlocked ? 'locked' : ''}`}
                    style={{ backgroundColor: subjects[selectedSubject].color }}
                >
                    {i > maxUnlocked ? '🔒' : i}
                </button>
            );
        }

        return (
            <div className="levels-container">
                <h3>Select Level</h3>
                <div className="level-buttons">{levels}</div>
            </div>
        );
    };

    return (
        <div className="learn-container">
            {!selectedSubject ? (
                <div className="subject-selection">
                    <h1>Choose a Subject to Learn</h1>
                    <div className="subject-buttons">
                        {Object.keys(subjects).map(subject => (
                            <button
                                key={subject}
                                onClick={() => handleSubjectSelect(subject)}
                                className="subject-btn"
                                style={{ backgroundColor: subjects[subject].color }}
                            >
                                {subjects[subject].icon} {subjects[subject].name}
                            </button>
                        ))}
                    </div>
                </div>
            ) : !selectedSection ? (
                <div className="section-selection">
                    <h1>{subjects[selectedSubject].name} Sections</h1>
                    <button
                        onClick={() => setSelectedSubject(null)}
                        className="back-btn"
                        style={{ backgroundColor: subjects[selectedSubject].color }}
                    >
                        ← Back to Subjects
                    </button>
                    <div className="section-buttons">
                        {subjects[selectedSubject].sections.map(section => (
                            <button
                                key={section}
                                onClick={() => handleSectionSelect(section)}
                                className="section-btn"
                                style={{ backgroundColor: subjects[selectedSubject].color }}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            ) : selectedLevel ? (
                <Level
                    questions={selectedSubject === 'math'
                        ? mathData[selectedSection][selectedLevel]
                        : englishData[selectedSection][selectedLevel]}
                    onComplete={() => handleLevelComplete(
                        selectedSubject,
                        selectedSection,
                        parseInt(selectedLevel.replace('level', '')) + 1
                    )}
                    onBack={() => setSelectedLevel(null)}
                    color={subjects[selectedSubject].color}
                />
            ) : (
                <div className="level-selection">
                    <h1>{selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}</h1>
                    <button
                        onClick={() => setSelectedSection(null)}
                        className="back-btn"
                        style={{ backgroundColor: subjects[selectedSubject].color }}
                    >
                        ← Back to {subjects[selectedSubject].name}
                    </button>
                    {renderLevelButtons()}
                </div>
            )}
        </div>
    );
};

export default Learn;