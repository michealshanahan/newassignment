import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header.js'
import Resume from './Resume.js'
import Portfolio from './Portfolio.js'
import Footer from './Footer.js'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEnvelopeSquare, faCocktail, faPlane, faPhoneSquare,  } from '@fortawesome/free-solid-svg-icons'
import './App.css'

library.add(faEnvelopeSquare, fab, faCocktail, faPlane, faPhoneSquare )

const App = () => {
    return(
        <div>
            <Header />
                
            <Switch >
                <Route exact path = '/' component = { Portfolio } />
                <Route path = '/resume' component = { Resume } />
            </Switch>
            <Footer />
        </div>
    )
}

export default App