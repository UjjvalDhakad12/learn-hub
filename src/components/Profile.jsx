import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';
import Navbar from '../components/Navbar';
import Footer from './Footer';

// API base URL
const API = "http://localhost:5000/api";

export default function Profile() {
    // State to store user data
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    // Fetch user profile when component loads
    useEffect(() => {
        axios.get(`${API}/profile`, { withCredentials: true })
            .then(res => setUser(res.data))      // Save user data
            .catch(() => navigate('/auth'));      // If error, redirect to auth page
    }, [navigate]);

    // Logout the user
    const handleLogout = async () => {
        await axios.post(`${API}/logout`, {}, { withCredentials: true });
        navigate('/register');   // After logout, go to register page
    };

    // Delete user account
    const handleDelete = async () => {
        const ok = window.confirm("Really delete account?"); // Confirm before deleting
        if (ok) {
            await axios.delete(`${API}/delete`, { withCredentials: true });
            navigate('/register');   // After delete, go to register page
        }
    };

    // Show loading message until user data is available
    if (!user) return <p style={{ textAlign: 'center' }}>Loading...</p>;

    return (
        <>
            <Navbar />
            <div className='main'>
                <div className="p-card">
                    <img src='/user.png' className="user-img" alt='image' />
                    <div className="pname">{user.username}</div>  {/* Show username */}
                    <div className="email">{user.email}</div>     {/* Show email */}
                    <div className="btns">
                        <button className="button" onClick={handleLogout}>Logout</button>
                        <button className="button" onClick={handleDelete}>Delete Account</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
