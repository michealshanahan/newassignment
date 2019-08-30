import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className = 'desk-image'>
            <ul className = 'list-links' >
                <Link to = '/'>Portfolio</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/resume'>Resume</Link>
                <Link to = '/contact'>Contact</Link>
            </ul>
            <div className = 'business-card'>
                <h4>Hello, I'm</h4>
                <h1>Micheal Shanahan</h1>
                <h3>Full Stack Developer</h3>
                <p>Info here</p>
            </div>

        </div>
    )
}

export default Header