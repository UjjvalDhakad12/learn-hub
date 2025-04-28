import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

// API base URL
const API = "http://localhost:5000/api";

export default function Register() {
    // State to store form inputs
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    // State to store success or error message
    const [msg, setMsg] = useState("");
    // Hook to navigate to different pages
    const navigate = useNavigate();
    // State to manage register button disable/enable
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // Update form data when input changes
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Enable register button only when all fields are filled
    useEffect(() => {
        if (form.name && form.email && form.password) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [form]);

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent page reload
        try {
            // Send register request
            await axios.post(`${API}/register`, form, { withCredentials: true });
            // After successful register, go to login page
            navigate('/login');
        } catch (err) {
            // If error, show error message
            setMsg(err.response?.data?.msg || 'Error');
        }
    };

    return (
        <div className='main'>
            <form className='form' onSubmit={handleSubmit}>
                {/* Show message */}
                <h2>{msg}</h2>

                <h1 className='title'>Register</h1>

                {/* Name input */}
                <input
                    type="text"
                    className='inp'
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                {/* Email input */}
                <input
                    type="email"
                    className='inp'
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                {/* Password input */}
                <input
                    type="password"
                    className='inp'
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                {/* Register button */}
                <button
                    disabled={isButtonDisabled}
                    className='btn'
                    type='submit'
                >
                    Register
                </button>

                {/* Link to go to login page */}
                <p className='log' onClick={() => navigate('/login')}>
                    Already have an account? Login
                </p>
            </form>
        </div>
    );
}
