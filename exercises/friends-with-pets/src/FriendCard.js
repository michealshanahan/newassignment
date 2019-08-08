import React from 'react'
import Pet from './Pet.js'



const FriendCard = (props) => {

        return(
                <div className="friendCard">
                <img className = 'profilePic'
                        src= {props.profilePic}
                        alt="new"
                />
                <h3 className='friend'>{props.fName}</h3>
                <h5 className= 'age'>Age:{props.age}</h5>
                
                <Pet pets = {props.pets}/>
                </div>
        )
}








export default FriendCard