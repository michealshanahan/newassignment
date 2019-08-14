import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './Header.js'
import Home from './Home.js'
import Services from './Services.js'
import About from './About.js'
import './App.css'
import Footer from './Footer.js';

const App = () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path = '/' component = { Home } />
                <Route path = '/services' component = { Services } />
                <Route path = '/about' component = { About } />
            </Switch>
            <Footer />
            
        </div>
    )
}

export default App