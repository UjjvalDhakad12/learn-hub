import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useState } from 'react'

const Home = () => {

    //text to speech ke liye
    const [text, settext] = useState('');

    //text to speech function
    const speak = () => {
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.rate = 0.8;  // 1 is normal, 0.5 is slow

        utterance.pitch = 2; // 0 to 2
        utterance.volume = 1; // 0 to 1

        speechSynthesis.speak(utterance);
    };

    //cards for the home page
    const cards = [
        {
            title: "Learn from Zero",
            desc: "Even if you’re starting from scratch, don’t worry! We’ll guide you step-by-step to build a strong foundation.",
            color: "142, 249, 252",
        },
        {
            title: "Why Learn English?",
            desc: "English opens the door to global knowledge, communication, and endless opportunities in every career field.",
            color: "142, 252, 204",
        },
        {
            title: "Why Math?",
            desc: "Mathematics sharpens your brain, boosts problem-solving skills, and prepares you for future challenges with confidence.",
            color: "142, 252, 157",
        },
        {
            title: "Step-by-Step Method",
            desc: "Every topic is broken down into simple, easy steps with real-life examples so you never feel confused or left behind.",
            color: "215, 252, 142",
        },
        {
            title: "Fun & Creative",
            desc: "Learning isn’t boring here! Enjoy animations, games, and fun activities that make studying exciting and enjoyable.",
            color: "252, 252, 142",
        },
        {
            title: "Learn at Your Speed",
            desc: "No rush! Whether you want to go slow or fast, our platform adjusts to your speed and learning style.",
            color: "252, 208, 142",
        },
        {
            title: "Test Yourself",
            desc: "After every lesson, take interactive quizzes to check your understanding and boost your memory instantly.",
            color: "252, 142, 142",
        },
        {
            title: "Track Your Progress",
            desc: "Keep an eye on your learning journey. Celebrate every achievement and know exactly how far you've come.",
            color: "252, 142, 239",
        },
        {
            title: "Be Confident",
            desc: "Build strong basics in both Math and English so you feel confident in school, exams, and real-life situations.",
            color: "204, 142, 252",
        },
        {
            title: "Join Learn-Hub",
            desc: "Become a part of a smart and friendly learning platform. Here, we believe in learning smart—not hard!",
            color: "142, 202, 252",
        },
    ];

    // Function to navigate to the learn page
    const learn = () => {
        window.location = '/learn'
    }

    return (
        <div>
            <Navbar />
            <div className='hero-sec'>
                <h1 className='txt-1'>Learn Math and English for free with Learn-Hub. </h1>
                <h2 className='txt-2'>We teach from 0 level to high professional level.</h2>
                <button onClick={learn} className='hero-btn'>
                    Learn-now
                </button>
            </div>

            <div>
                <div className="wrapper">
                    <div className="inner">
                        {cards.map((card, index) => (
                            <div
                                className="card"
                                key={index}
                                style={{
                                    backgroundColor: `rgb(${card.color})`,
                                    transform: `rotate(${index * 1}deg)`,
                                }}
                            >
                                <div className="img">
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr></hr>

            <h1 className='book-title'>Listen text</h1>

            <div className='listen'>
                <input placeholder='Write text' type='text' className='listen-inp' onChange={(e) => settext(e.target.value)} />
                <button onClick={speak} className='listen-btn'>Listen</button>
            </div>

            <div>
                <hr></hr>
                <h1 className='book-title'>Our Cours</h1>
                <div className='book-sec'>
                    <div className='books'>
                        <div className="book">
                            <p className='book-txt'>Math is important because it builds logic, problem-solving skills, and helps us in daily life and future careers. <Link to="/learn">learn-now</Link></p>
                            <div className="cover">
                                <h1>Math</h1>
                            </div>
                        </div>
                        <div className="book">
                            <p className='book-txt'>
                                English is important because it helps you communicate globally, get better job opportunities, and access knowledge easily. <Link to="/learn">learn-now</Link></p>
                            <div className="cover">
                                <h1>English</h1>
                            </div>
                        </div>
                        <div className="book">
                            <p className='book-txt'>
                                Soon</p>
                            <div className="cover">
                                <h1>Soon</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home