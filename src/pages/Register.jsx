import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const API = "http://localhost:5000/api";

export default function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (form.name && form.email && form.password) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [form]);

    const handleSubmit = async (e) => {
        e.preventDefault();  
        try {
            await axios.post(`${API}/register`, form, { withCredentials: true });
            navigate('/login'); 
        } catch (err) {
            setMsg(err.response?.data?.msg || 'Error');
        }
    };

    return (
        <div className='main'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>{msg}</h2>
                <h1 className='title'>Register</h1>
                <input
                    type="text"
                    className='inp'
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    className='inp'
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    className='inp'
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <button
                    disabled={isButtonDisabled}
                    className='btn'
                    type='submit'
                >
                    Register
                </button>
                <p className='log' onClick={() => navigate('/login')}>
                    Already have an account? Login
                </p>
            </form>
        </div>
    );
}
