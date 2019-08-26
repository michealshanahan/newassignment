import React, {Component} from 'react'
import { withState } from './DrinkProvider.js'


class Drink extends Component{
    render(){
    let {idDrink, strInstructions, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15} = this.props.drink
    
    
    
    const measureArray = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15]
    
  

    const ingredientsArray = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15]
    const ingredientsMap = ingredientsArray.map((ingredient, index) => {
        if(ingredient){
            return (<li key = {ingredient + index} className = 'ingredient' >{`${ingredient}:   ${measureArray[index]}`}</li>)
        }else{
            return(null)
        }
    })

    const star = () =>{
        if(this.props.favorites.includes(this.props.drink)){
            return(
            <button onClick = {()=> this.props.removeFav(this.props.drink)} className = 'remove-button' >Remove from Favorites</button>)
        }else{
            return(
                <div className='star-container'> Rating:
                    <span onClick = {()=>this.props.addStarsToDrink(this.props.drink, 1)} className = 'starOne starTwo starThree starFour starFive'>☆</span>
                    <span onClick = {()=>this.props.addStarsToDrink(this.props.drink, 2)} className = 'starTwo starThree starFour starFive'>☆</span>   
                    <span onClick = {()=>this.props.addStarsToDrink(this.props.drink, 3)} className = 'starThree starFour starFive'>☆</span>
                    <span onClick = {()=>this.props.addStarsToDrink(this.props.drink, 4)} className = 'starFour starFive'>☆</span>
                    <span onClick = {()=>this.props.addStarsToDrink(this.props.drink, 5)} className = 'starFive'>☆</span>
                </div>
            )
        }
    }


    const theme = (ingredients) => {
        if(ingredients.includes("Whiskey")){
            return ('whiskey')
        }else{
            return('generic')
        }
    }
    return(
        <div className = {`${theme(ingredientsArray)} drink-card`} key = {idDrink}>
            <div className = 'drink-title' >{strDrink}</div>
            <img className = 'drink-image' src= {strDrinkThumb} alt = 'drink' />
            <div className ='drink-info' >
                <ul className ='drink-list' >{ingredientsMap} </ul>
                <div className = 'drink-list' >{strInstructions}</div>
                {star()}
            
            </div>
        </div>
    )
    }
}
    


export default withState(Drink)
