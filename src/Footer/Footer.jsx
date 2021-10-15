import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Submit from './Submit'

function Footer() {
    return (
        <div className='E0'>
            <div className="E1">
                <div className="E2">
                    <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/" >
                        <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" alt=""/>
                    </a>
                    <a href='https://twitter.com/We_Are_TEN?s=08' >
                        <img src="https://static.wixstatic.com/media/59687ffffc2042f885062ce2b0744381.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01/59687ffffc2042f885062ce2b0744381.webp" alt=""/>
                    </a>
                    <a href='https://www.instagram.com/theentrepreneurshipnetwork/' >
                        <img src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp" alt=""/>
                    </a>
                </div>

                <Submit />

                <div className="E3">
                    <Link to='/'>About Us</Link>
                    <Link to='/'>FAQ's</Link>
                    <Link to='/'>Contact Us</Link>
                </div>
            </div>

            <div className="E4">
                <span>© 2020 Limitless Technologies - The Entrepreneurship Network</span> 
            </div>
        </div>
    )
}

export default Footer
