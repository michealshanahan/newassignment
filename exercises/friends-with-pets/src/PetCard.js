import React from 'react'

const PetCard = (props) => {
  let breed = props.breed
  let photo = "https://loremflickr.com/320/240"
    return(
        <div>
            <img className = "pet-image" src={photo +'/' + breed} alt="petPic"/>
            <h6 className= "pet-card">Pet Name: {props.aName}     Breed:{props.breed}</h6>
        </div>
    )
}


export default PetCard