import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css'
import Navbar from '../components/Navbar';
import Footer from './Footer';


const API = "http://localhost:5000/api";

export default function Profile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/profile`, { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => navigate('/auth'));
    }, [navigate]);

    const handleLogout = async () => {
        await axios.post(`${API}/logout`, {}, { withCredentials: true });
        navigate('/register');
    };

    const handleDelete = async () => {
        const ok = window.confirm("Really delete account?");
        if (ok) {
            await axios.delete(`${API}/delete`, { withCredentials: true });
            navigate('/register');
        }
    };

    if (!user) return <p style={{ textAlign: 'center' }}>Loading...</p>;

    return (
        <>
            <Navbar />
            <div className='main'>
                <div className="p-card">
                    <img src='/user.png' className="user-img" alt='image' />
                    <div className="pname">{user.username}</div>
                    <div className="email"> {user.email}</div>
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
