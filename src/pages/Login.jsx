import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

// API base URL
const API = "http://localhost:5000/api";

export default function Login() {
    // State to store form data
    const [form, setForm] = useState({ email: '', password: '' });
    // State to store message (error or success)
    const [msg, setMsg] = useState("");
    // Hook to navigate to different pages
    const navigate = useNavigate();
    // State to manage button disabled status
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // Handle input field changes
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Enable or disable the button based on form inputs
    useEffect(() => {
        if (form.email && form.password) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [form]);

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        // Check if any field is empty
        if (!form.email || !form.password) {
            setMsg("Please fill all fields");
            return;
        }

        try {
            // Send login request
            await axios.post(`${API}/login`, form, { withCredentials: true });
            // If login successful, go to home page
            navigate('/home');
        } catch (err) {
            // If error, show error message
            setMsg(err.response?.data?.msg || 'Error');
        }
    };

    return (
        <div className='main'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='title'>Login</h1>

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

                {/* Submit button */}
                <button
                    type='submit'
                    className='btn'
                    disabled={isButtonDisabled}
                >
                    Login
                </button>

                {/* Message (error/success) */}
                <p>{msg}</p>
            </form>
        </div>
    );
}
