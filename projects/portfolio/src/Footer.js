import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {
    return(
        <div className= 'footer-container' id = 'footer'>
            <div className = 'contact-info'>
                <span className="contact">Micheal Shanahan</span>
                <br/>
                <span className="contact">
                    <FontAwesomeIcon className= 'contact' icon= 'phone-square' />
                    Phone: (435)850-9538
                </span>
                <br/>
                <a href= 'https://github.com/michealshanahan' className="contact-text">
                    <FontAwesomeIcon className= 'contact' icon={['fab', 'github-square']} />
                    Github: https://github.com/michealshanahan
                </a>
                <br/>
                <a class="contact" href="mailto:m_shanahan@hotmail.com?Subject=Developer">
                    <FontAwesomeIcon className= 'contact' icon= 'envelope-square' />
                    e-mail: m_shanahan@hotmail.com
                </a>
            </div>
        </div>
    )
}

export default Footer