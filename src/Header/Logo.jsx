import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

function Logo() {
    return (
        <div className='A0' >
            <div className="A1">
                <Link to='/' className='A2' >
                    <span className="A3">T</span> 
                    <span className="A4">he</span> 
                </Link>
                <Link to='/' className='A2' >
                    <span className="A3">E</span> 
                    <span className="A4">ntrepreneurship</span> 
                </Link>
                <Link to='/' className='A2' >
                    <span className="A3">N</span> 
                    <span className="A4">etwork</span> 
                </Link>
            </div>

            <div className="A5">
                <Link to='/' >
                    <img src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Logo
