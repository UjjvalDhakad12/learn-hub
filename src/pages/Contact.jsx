import '../styles/Contact.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <div className='c-main'>
                <Navbar />
                <div className='c-card'>
                    <h1 className='c-title'>Contact-US</h1>
                    <input className='c-inp' placeholder='Enter your name' />
                    <input className='c-inp' placeholder='Enter your email' />
                    <input className='c-inp' placeholder='write text' type='text' />
                    <button className='c-btn'>Submit</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
