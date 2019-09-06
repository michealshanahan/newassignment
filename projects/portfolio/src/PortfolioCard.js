import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioCard = (props) => {
    let {cardIcon, cardLink, iconText, cardColor, cardDescription, complementaryColor } = props.item
    return(
        <a href= {`${cardLink}`} className="portfolio-card" style= {{background: cardColor}}>
        
            <div className = 'icon-wrapper'>
                <FontAwesomeIcon className= 'card-icon' icon= {cardIcon} style = {{color: complementaryColor}} />
                <br></br>
                <span className = 'icon-text' style = {{color: complementaryColor}} >{iconText}</span>
            </div>
            <div className = 'description' style= {{background: complementaryColor}} >{cardDescription}</div>

        </a>
    )
}
export default PortfolioCard

