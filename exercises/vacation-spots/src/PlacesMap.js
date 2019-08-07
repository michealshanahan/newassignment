import React from 'react'
import Vacation from './vacationCard.js'


const PlacesMap = () => {

 
    
    const destinations = [
            {
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring"
            },
            {
            place: "Cancun",
            price: 900,
            timeToGo: "Winter"
            },
            {
            place: "China",
            price: 1200,
            timeToGo: "Fall"
            },
            {
            place: "Russia",
            price: 1100,
            timeToGo: "Summer"
            },
            {
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring"
            }
        ]
    const mappedDestinations = destinations.map((destination, index) => {
        
        return(
            <Vacation key ={destination + index} place = {destination.place} price = {destination.price} season = {destination.timeToGo} />
        )
    }) 
    return (
        mappedDestinations
    )  
}

export default PlacesMap