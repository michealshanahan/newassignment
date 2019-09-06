import React from 'react'

import PortfolioCard from './PortfolioCard.js'

// to add another Portfolio card add another object to the Portfolio array. For the icon, use fontawesome and destructure it on the App page and add it to the library. Then use the icons name, with out the fa as a string
const Portfolio = () => {
    const portfolioItems = [
    {
        cardIcon: "cocktail",
        iconText: 'Drink Recipes',
        cardColor: '#424242',
        cardDescription: 'An example of my work that makes an API request and renders a drink recipe and instructions. I used React, Browser Router, and Axios to make this.',
        cardLink: 'http://www.drink-recipe.surge.sh',
        complementaryColor: '#2ca5df'
    },{
        cardIcon: "plane",
        iconText: 'Drink Recipes',
        cardColor: 'aliceblue',
        cardDescription: 'This is an site that makes an API request and renders a drink recipe and instructions',
        cardLink: 'drink-recipe.surge.sh',
        complementaryColor: '#2ca5df'
    },{
        cardIcon: "cocktail",
        iconText: 'Drink Recipes',
        cardColor: '#696969',
        cardDescription: 'This is an site that makes an API request and renders a drink recipe and instructions',
        cardLink: 'drink-recipe.surge.sh',
        complementaryColor: '#2ca5df'
    },{
        cardIcon: "cocktail",
        iconText: 'Drink Recipes',
        cardColor: '#841515',
        cardDescription: 'This is an site that makes an API request and renders a drink recipe and instructions',
        cardLink: 'drink-recipe.surge.sh',
        complementaryColor: '#158484'
    },{
        cardIcon: "cocktail",
        iconText: 'Drink Recipes',
        cardColor: '#841515',
        cardDescription: 'This is an site that makes an API request and renders a drink recipe and instructions',
        cardLink: 'drink-recipe.surge.sh',
        complementaryColor: '#158484'
    },{
        cardIcon: "cocktail",
        iconText: 'Drink Recipes',
        cardColor: '#841515',
        cardDescription: 'This is an site that makes an API request and renders a drink recipe and instructions',
        cardLink: 'drink-recipe.surge.sh',
        complementaryColor: '#158484'
    }
]
    return (
        <div>
            <div className = 'portfolio-wrapper'>
                {portfolioItems.map((item, index) => {
                    return <PortfolioCard key = {item + index} item = {item}/>
                })}
            </div>
            <div className = 'text-bottom' >text hidden</div>
        </div>
    )
}

export default Portfolio