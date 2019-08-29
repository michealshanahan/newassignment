import React, {Component} from 'react'
import {Switch, Route } from 'react-router-dom'

import {withState} from './DrinkProvider.js'
import Header from './DrinkHeader'
import Main from './Main.js'
import CategoryMenu from './CategoryMenu.js'
import Favorites from './Favorites.js'

import './DrinkApp.css'

class DrinkApp extends Component {
    render(){
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path = '/' component= {Main} />
                    <Route path = {`/categorymenu/:category`} component={CategoryMenu} />
                    <Route path = '/favorites' component = { Favorites } />
                </Switch>
            </div>
        )
    }
}

export default withState(DrinkApp)