import React, {Component} from 'react'
import { withState } from './DrinkProvider'
import {Link} from 'react-router-dom'

class Header extends Component {
  
    
    
    render(){
        const alchoholArray = ['Whiskey', 'Tequila', 'Gin', 'Bourbon',  'Rum', 'Vodka', 'Wine', 'Scotch', 'Beer']
        
        return(
            <div className = 'header-container'>
                <div className = 'title'>Drink Recipe</div>
                <ul className = 'header-buttons'>
                    <Link to = '/'>Home</Link>
                    <div className = 'button-list'  >Categories
                        <div className ={`list-container display-${this.props.categoryDisplay}`}>
                            {this.props.categories.map((cat, index) => {
                                let strCat = cat.strCategory.replace(/ /g,"_")
                                return <Link className= 'list-items' onClick = {()=>{this.props.getDrinkList(`filter.php?c=${cat.strCategory}`)}} key = {cat.strCategory+index} to ={`/categorymenu/${strCat}`} >{cat.strCategory}</Link>
                            })}
                        </div>
                    </div>
                    <div className = 'button-list' >Search Recipes By Ingredient
                        <div className ={`list-container display-${this.props.ingredientDisplay}`}  >
                            {alchoholArray.map((booze, index) => {
                                return <Link className= 'list-items' onClick = {()=> {this.props.getDrinkList(`filter.php?i=${booze}`)}} key = {booze + index} to = {`/categorymenu/${booze}`} >{booze}</Link>
                            })}
                        
                        </div>
                    </div>
                    <Link to = '/favorites'>Favorites</Link>
                    <input onChange = {this.props.handleChange} placeholder = 'Search' name ='search' value = {this.props.search} />
                    <Link to= '/categorymenu/search'>
                        <button onClick = {()=> this.props.getDrinkList(`search.php?s=${this.props.search}`)} className = 'search-button' >Search</button>
                    </Link> 
                </ul>
            </div>
        )
    }
}

export default withState(Header)
