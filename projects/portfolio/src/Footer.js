import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return(
        <div className= 'footer-container'>
            <div className = 'contact-info'>
                <span className="contact">Micheal Shanahan</span>
                <span className="contact">
                    <FontAwesomeIcon className= 'contact' icon= 'phone-square' />
                    Phone: (435)850-9538
                </span>
                <a href= 'https://github.com/michealshanahan' className="contact-text">
                    <FontAwesomeIcon className= 'contact' icon={['fab', 'github-square']} />
                    Github: https://github.com/michealshanahan
                </a>
                <span className="contact">
                    <FontAwesomeIcon className= 'contact' icon= 'envelope-square' />
                    envelope-square
                </span>
            </div>
            <a name= '#linkToBottom'></a>
        </div>
    )
}

export default Footer