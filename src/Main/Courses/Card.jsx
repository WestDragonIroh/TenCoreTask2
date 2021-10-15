import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='I0'>
            <img src={props.img} alt=""/>
            <h1 className="I1">{props.text}</h1>
            <h1 className="I2">{props.price}</h1>
        </div>
    )
}

export default Card
