import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {Link as scrollLink, animateScroll as scroll} from 'react-scroll'


class Header extends Component {
    constructor(){
        super()
        this.state = {
            menuToggle: false
        }
    }
    render(){
        return(
            <div className = 'desk-image'>
                <ul className = 'list-links' >
                    <Link to = '/'>Portfolio</Link>
                    <Link to = '/about'>About</Link>
                    <Link to = '/resume'>Resume</Link>
                    <a href = "#footer">Contact</a>
                    
                </ul>
                <div className = 'business-card'>
                    <h1>Micheal Shanahan</h1>
                    <h3>Full Stack Developer</h3>
                    <p>Info here</p>
                </div>
            </div>
        )

    }
}

export default Header