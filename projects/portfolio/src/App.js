import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header.js'
import Resume from './Resume.js'

import './App.css'

const App = () => {
    return(
        <div>
            <Header />
            <Switch >
                {/* <Route exact path = '/' component = { Portfolio } /> */}
                <Route path = '/resume' component = { Resume } />
            </Switch>

        </div>
    )
}

export default App