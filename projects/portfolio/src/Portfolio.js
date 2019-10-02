import React from 'react'

import PortfolioCard from './PortfolioCard.js'

// to add another Portfolio card add another object to the Portfolio array. For the icon, use fontawesome and destructure it on the App page and add it to the library. Then use the icons name, with out the fa as a string
const Portfolio = () => {
    const portfolioItems = [
    {
        cardIcon: "cocktail",
        iconText: 'Drink Recipes',
        cardColor: '#424242',
        cardDescription: 'An example of my work that makes an API request and renders a drink recipe and instructions. I used React, and Axios to make this.',
        cardLink: 'http://www.drink-recipe.surge.sh',
        complementaryColor: '#2ca5df'
    },{
        cardIcon: "concierge-bell",
        iconText: 'Hotel Reservations Database',
        cardColor: 'aliceblue',
        cardDescription: 'A website I built that has user login and authentication, and creates a database of reservations using MongoDB',
        cardLink: 'http://oak-springs.herokuapp.com/',
        complementaryColor: '#2ca5df'
    },{
        cardIcon: "plane",
        iconText: 'Aviation Electronic Programming',
        cardColor: '#696969',
        cardDescription: 'A link to a site with information about VOR. As an engineering technician, I have installed, maintained, programmed and repaired this sort of equipment.',
        cardLink: 'http://krepelka.com/fsweb/learningcenter/navigation/usingvorandadf.htm',
        complementaryColor: '#2ca5df'
    }
]
    return (
        <div>
            <div className = 'portfolio-wrapper'>
                {portfolioItems.map((item, index) => {
                    return <PortfolioCard key = {item + index} item = {item}/>
                })}
            </div>
            <div className = 'text-bottom' ></div>
        </div>
    )
}

export default Portfolio