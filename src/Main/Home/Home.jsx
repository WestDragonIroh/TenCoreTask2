import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import I1 from './img1.jpg'
import I2 from './img2.png'

function Home() {
    return (
        <div className='G0' >
            <div className="G1">
                <img src={I1} alt=""/>
            </div>
            
            <div className="G2">
                <img src={I2} alt=""/>
                <div className="G3">
                    <Link to='#' >
                        <h1>Entrepreneurship</h1>
                        <h1>made fun</h1>
                    </Link>
                    <Link to='#' >
                        <h2>Explore Here</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
