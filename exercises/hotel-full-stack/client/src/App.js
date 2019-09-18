import React from 'react'
import UserSignup from './UserSignup'
import { Switch, Route } from 'react-router-dom'
import UserProfile from './UserProfile'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path = "/userprofile" component = { UserProfile } />
                <Route exact path = '/' component = {UserSignup} />
            </Switch>
            
        </div>
    )
}

export default App