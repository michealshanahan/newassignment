import React from 'react'
import {Switch, Route} from 'react-router-dom'

import NavBar from './NavBar.js'
import Home from './Home.js'

const App = () => {
    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path = '/' component = {Home} />
                
            </Switch>

        </div>
    )
}

export default App