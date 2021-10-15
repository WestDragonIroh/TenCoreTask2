import React from 'react'
import './Courses.css'
import { CardData } from './CardData'
import Card from './Card'

function Courses() {
    return (
        <div className='H0' >
            { CardData.map((val, index) => {
                return <Card 
                        key = {index}
                        img = {val.img}
                        text = {val.text}
                        price = {val.price}
                         />
            } )}
        </div>
    )
}

export default Courses
