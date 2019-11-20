import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'



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
                    <h4>I have experience building web apps, a great attitude, and the ability to learn things quickly. I will make a great addition to your team!</h4>
                </div>
                <h4 className = "bottom-text" >Here are some examples of my work:</h4>
            </div>
        )

    }
}

export default Header