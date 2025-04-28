import '../styles/Contact.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        emial: '',
        description: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', form, { withCredentials: true });
            alert("Registered successfully!");
        } catch (err) {
            console.error(err.response?.data?.msg || "Error");
        }
    };

    return (
        <div>
            <div className='c-main'>
                <Navbar />
                <div>
                    <h1 className='c-title'>Contact-US</h1>
                    <form className='c-card' onSubmit={handleSubmit}>
                        <input name='name' className='c-inp' placeholder='Enter your name' value={form.name} onChange={handleChange} required />
                        <input name='email' className='c-inp' placeholder='Enter your email' value={form.email} onChange={handleChange} required />
                        <input name='description' className='c-inp' placeholder='description' type='text' value={form.description} onChange={handleChange} required />
                        <button type='submit' className='c-btn'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
