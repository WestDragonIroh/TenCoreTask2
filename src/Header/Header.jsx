import React from 'react'
import './Header.css'
import Logo from './Logo'
import Search from './Search'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='header'>
            <div className="head_up">
                <div className="head_div">
                    <Logo />
                </div>

                <div className="head_div head_right">
                    <Search />
                </div>
            </div>

            <div className="head_down">
                <Navbar />
            </div>
        </div>
    )
}

export default Header
