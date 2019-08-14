import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className = 'footer-container' >
            <ul className = 'footer-list' >
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About Us</Link>
                <Link to = '/services'>Services</Link>
            </ul>
        </div>
    )
}


export default Footer