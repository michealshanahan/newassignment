import React from 'react'

const PortfolioCard = (props) => {
    let {cardIcon, altText, iconText, cardColor, cardDescription, complementaryColor } = props.item
    return(
        <div className="portfolio-card" style= {{background: cardColor}}>
            <button onClick = {()=>console.log(props.item)} >This Closk</button>
            <img className = 'card-icon' src = {cardIcon} alt = {altText}/>
            <span className = 'icon-text' >{iconText}</span>
            <div className = 'description' style= {{background: complementaryColor}} >{cardDescription}</div>

        </div>
    )
}
export default PortfolioCard