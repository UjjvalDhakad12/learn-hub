import React from 'react'
import '../styles/Overnav.css'
import { Link } from 'react-router-dom'

const Overnav = () => {
    return (
        <div>
            <div className='o-navbar'>
                <h1 className='o-logo'> Learn-hub</h1>
                <div className='o-nav'>
                    <Link to="/register" className='o-item'>Register</Link>
                    <Link to="/login" className='o-item'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Overnav