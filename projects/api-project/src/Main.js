import React, { Component} from 'react'
import Axios from 'axios';
import Drink from './Drink.js'


class Main extends Component{
    constructor(){
        super()
        this.state = {
            search: '',
            randomDrink: {
                strDrink: ''
            }
        }
    }
    componentDidMount(){
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => {
            this.setState({randomDrink: res.data.drinks[0]})
        })
    }
    
    render(){
        return(
            <Drink drink = {this.state.randomDrink} />
        )

    }
            
}

export default Main