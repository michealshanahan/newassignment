import React from 'react'
import PetCard from './PetCard.js';

const Pet = (props) => {
    const animals = props.pets

    const mappedAnimals = animals.map((animal, index) => {
        return (
            <div className= "absolute">
                <PetCard key = {animal + index} aName = {animal.name} breed = {animal.breed} />
            </div>

        )
    })
    return mappedAnimals
}


export default Pet