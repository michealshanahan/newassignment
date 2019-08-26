import React, {Component} from 'react'
import { withState } from './DrinkProvider.js'
import Drink from './Drink.js'

 

class Favorites extends Component{
    
    displayStars = (faves) => {
        if(faves.stars === 1){
            return(
                <div className = 'rating' ><span className= 'black' >Rating:</span> ★☆☆☆☆</div>
            )
        }else if(faves.stars === 2){
            return(
                <div className = 'rating' ><span className= 'black' >Rating:</span>: ★★☆☆☆</div>
            )
        }else if(faves.stars === 2){
            return(
                <div className = 'rating' ><span className= 'black' >Rating:</span>: ★★★☆☆</div>
            )
        }else if(faves.stars === 2){
            return(
                <div className = 'rating' ><span className= 'black' >Rating:</span>: ★★★★☆</div>
            )
        }else{
            return(
                <div className = 'rating' ><span className= 'black' >Rating:</span>: ★★★★★</div>
            )
        }
    }
    
    render(){
        const faves = this.props.favorites
        return(
            <div > 

                {faves.map(fav => {
                    return(
                        <div key = {fav.idDrink} className="fav-container">
                            <div className = 'fav-title' key = {fav.idDrink}>{fav.strDrink}</div>
                            <img className ='fav-image' src = {fav.strDrinkThumb} alt = 'drink'/>
                                {this.displayStars(fav)}
                            <button onClick = {() => this.props.removeFav(fav)}>Remove from Favorites</button>
                        </div>
                        )
                })}
                

            </div>
        )
    }
}

export default withState(Favorites)
