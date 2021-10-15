import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import './Search.css'

function Search() {
    const [search, setSearch] = useState('')

    const searchItem = (e) => {
        alert(search)
        setSearch('')
    }

    return (
        <div className='B0'>
            <div className="B1">
                <div className="B2">
                    <Link to='#'  >
                        <div className="B3">
                            <BsIcons.BsCart2 />
                        </div>
                    </Link>
                </div>

                <div className="B4">
                    <Link to='#' >
                        <div className="B5">
                        <span><IoIcons.IoMdContact /></span> 
                        <span>Log In</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="B6">
                <input type="text" placeholder ='Search here...' value={search} onChange= {e => setSearch(e.target.value)} />
                <AiIcons.AiOutlineSearch onClick={searchItem} />
            </div>
        </div>
    )
}

export default Search
