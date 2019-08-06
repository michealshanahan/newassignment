import React from 'react'

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
                <a className="home nav" href="index.html">Home</a>
                <a className="gallery nav" href="gallery.html">Gallery</a>
                <a className="profile nav" href="profile.html">Company Profile</a>
                <a className="contact nav" href="contact.html">Contact Us</a>
            </div>
        </div>
    </header>
    )
}


export default Header