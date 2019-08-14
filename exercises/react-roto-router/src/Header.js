import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(){
        super()
    }


    render(){
        return(
            <div className = 'headerContainer' >
                <h1 className = 'title' >Toby's Plumbing</h1>
                <h3 className = 'title' >24 Hour Service for Your Plumbing and HVAC Needs</h3>
                <div className = 'image2'></div>
                <div className = 'image' ></div>
                <ul className = 'linkContainer' >
                    <Link to = '/'>Home</Link>
                    <Link to = '/about'>About</Link>
                    <Link to = 'services'>Services</Link>
                </ul>
            </div>
        )
    }
}


export default Header