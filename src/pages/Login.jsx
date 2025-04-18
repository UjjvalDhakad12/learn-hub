import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const API = "http://localhost:5000/api";

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (form.email && form.password) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [form]);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if (!form.email || !form.password) {
            setMsg("Please fill all fields");
            return;
        }
        try {
            await axios.post(`${API}/login`, form, { withCredentials: true });
            navigate('/home');
        } catch (err) {
            setMsg(err.response?.data?.msg || 'Error');
        }
    };

    return (
        <div className='main'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='title'>Login</h1>
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
                    type='submit'
                    className='btn'
                    disabled={isButtonDisabled}
                >
                    Login
                </button>
                <p>{msg}</p>
            </form>
        </div>
    );
}
