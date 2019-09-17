import React from 'react'
import { Link } from 'react-router-dom'

const  Header = () => {
    return(
        <header className="header">
        <div className="headerA">
            <div className="headContainer">
                <img className="window" src="https://i.ya-webdesign.com/images/white-window-frame-png-10.png" alt="window frame"/>
                <div className="titleContainer">
                    <h1 className="title">Mountain Premier Construction and Maintenance</h1>
                    <h3 className="subtitle">From the ground up since 2003</h3>
            </div>
        </div>
        <div className="mountainContainer">
            <img className="mountain" src="https://i.dlpng.com/static/png/173886_preview.png" alt="mountain"/>
        </div>
        </div>
        <div className="navBar">
            <div className="navContainer">
                <Link className="home nav" to ="/">Home</Link>
                <Link className="gallery nav" to ="/gallery">Gallery</Link>
                <Link className="profile nav" to ="/profile">Company Profile</Link>
                <Link className="contact nav" to ="/contact">Contact Us</Link>
            </div>
        </div>
    </header>
    )
}


export default Header