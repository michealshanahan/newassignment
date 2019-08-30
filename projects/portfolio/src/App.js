import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header.js'
import Resume from './Resume.js'
import Portfolio from './Portfolio.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faCocktail} from '@fortawesome/free-solid-svg-icons'
import './App.css'

library.add(faCocktail)

const App = () => {
    return(
        <div>
            <Header />
                <i class="fas fa-cocktail"></i>
            <Switch >
                {/* <Route exact path = '/' component = { Portfolio } /> */}
                <Route path = '/resume' component = { Resume } />
            </Switch>
            <Portfolio />
        </div>
    )
}

export default App