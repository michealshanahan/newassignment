import React, {Component} from 'react'
import Axios from 'axios'

const {Consumer, Provider} = React.createContext()

class DrinkProvider extends Component{
    constructor(){
        super()
        this.state = {
            categories: [],
            categoryDisplay: false,
            ingredientDisplay: false,
            drinksInCategory: [],
            drink: '',
            favorites: JSON.parse(localStorage.getItem('drinks')) || [],
            search: ''
        }
    }
    removeFav = (drink) => {
        const faves = this.state.favorites
        const filteredFaves = faves.filter(fav => fav !== drink)
        localStorage.setItem('drinks', JSON.stringify(filteredFaves))
        this.setState({
            favorites: JSON.parse(localStorage.getItem('drinks')) || []
        })
    }
    addStarsToDrink = (drink, numberOfStars) =>{
       
        drink.stars = numberOfStars
        if (this.state.favorites.includes(drink)){
            console.log('already saved')
        }else{
            this.setState(prev=> {
                return {
                    favorites: [...prev.favorites, drink]
                }
            }, () => {
                localStorage.setItem('drinks', JSON.stringify(this.state.favorites))
            })
        }

    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    showDrink = (drinkId) => {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`).then(res =>{
            this.setState({drink: res.data.drinks[0]})
            
        })
    }
    clearDrink = ()=> {
        this.setState({drink: ''})
    }

    getDrinkList = (category) => {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${category}`).then(res => {
            this.setState({drinksInCategory: res.data.drinks, drink: ''})
        })
    }

    toggle = (display) => this.setState((prevState)=>({[display]: !prevState[display]}))


    componentDidMount(){
        Axios.all([
            Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then(res => {
                this.setState({
                    categories: res.data.drinks
                })
            })
            

        ])

    }
    render(){
        return(
            <Provider value = {{...this.state, 
                                toggle: this.toggle, 
                                showDrink: this.showDrink,
                                handleChange: this.handleChange,
                                addStarsToDrink: this.addStarsToDrink,
                                removeFav: this.removeFav,
                                clearDrink: this.clearDrink,
                                getDrinkList: this.getDrinkList}} > 
                                
                {this.props.children}
            </Provider>
        )
    }

}

export default DrinkProvider
export const withState = (C) => {
    return(props)=> 
    <Consumer>
        {value =>
        <C {...value} {...props} />}
    </Consumer>
}
