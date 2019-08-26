import React, {Component} from 'react'
import {withState} from './DrinkProvider'
import Drink from './Drink.js'

class CategoryMenu extends Component{
    constructor(){
        super()
        this.state = {
            drink: ''
        }

    }   
    drinkList = () =>{
        if(this.props.drinksInCategory){
            return (this.props.drinksInCategory.map((drink, index) => {
                return (<div onClick = {()=>this.props.showDrink(drink.idDrink)} key = {drink.idDrink} props = {drink} className = 'drink-list-item'>{[drink.strDrink]}</div>)
            }))
        }else{
            return (
                <div>No Drinks Found</div>
            )
        }
    }
    render(){
        if(this.props.drink){
            return(
                <Drink drink = {this.props.drink} />
            )
        }else{
            return(
                <div>
                    {this.drinkList() }   
                </div>
            )
        }
        
    }
}

export default withState(CategoryMenu)