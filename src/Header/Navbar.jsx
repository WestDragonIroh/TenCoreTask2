import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import More from './More'

function Navbar() {
    return (
        <div className='C0' >
            <div className="C1">
                <Link to='/' >Home</Link>
            </div>
            <div className="C2"></div>

            <div className="C1">
                <Link to='/courses'>Online Courses</Link>
            </div>
            <div className="C2"></div>

            <div className="C1">
                <Link to='/hiring'>We're Hiring </Link>
            </div>
            <div className="C2"></div>

            <div className="C1">
                <More />
            </div>
        </div>
    )
}

export default Navbar
