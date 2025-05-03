import React from 'react'
import '../styles/Learn.css'
import Navbar from '../components/Navbar'

const Learn = () => {

    //agar teacher hai to form khulega
    const form = () => {
        window.location.href = '/math'
    }

    return (
        <div>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h1 className='learn-heading'>What would you like to learn today?</h1>
            </div>
            <div className='learn-sec'>
                <div className='learn-card'>
                    <h1 className='learn-title'>Math</h1>
                    <p className='learn-desc'>All you need is patience and daily practice</p>
                    <button onClick={form} className='learn-btn'>Math</button>
                </div>
                <div className='learn-card'>
                    <h1 className='learn-title'>English</h1>
                    <p className='learn-desc'>All you need is patience and daily practice</p>
                    <button className='learn-btn'>English</button>
                </div>
            </div>
        </div>
    )
}

export default Learn