import React, { useState } from 'react'
import './Submit.css'

function Submit() {

    const [data, setdata] = useState({
        fullname: "",
        collname: "",
        phone: "",
        email: "",
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setdata((preVal) => {
            return {
                ...preVal,[name]: value,
            }
        })
    };

    const Submit = (e) => {
        e.preventDefault();
        alert(`
            My name is ${data.fullname}.
            My college is ${data.collname}
            My Phone Number is ${data.phone}
            Email is ${data.email}, `
        )
    };

    return (
        <div className='F0'>
            <div className="F1">Subscribe to our newsletter</div>

            <div className="F2">
                <input type="text" className="F3" placeholder='Full Name' name = 'fullname' value = {data.fullname} onChange = {InputEvent} />

                <input type="text" className="F3" placeholder='College Name' name = 'collname' value = {data.collname} onChange = {InputEvent} />
            </div>
            <div className="F2">
                <input type="text" className="F3" placeholder='Mobile No.' name = 'phone' value = {data.phone} onChange = {InputEvent} />

                <input type="email" className="F3" placeholder='Email' name = 'email' value = {data.email} onChange = {InputEvent} />
            </div>

            <div className="F4">Join TEN's Discord Community</div>

            <button className="F5" onClick={Submit} >Submit</button>
        </div>
    )
}

export default Submit
