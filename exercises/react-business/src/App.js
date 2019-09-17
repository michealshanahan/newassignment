import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Body from './Body.js'
import { Switch, Route } from 'react-router-dom'
import Contact from './Contact.js'


import './styles.css'


const App = () => {
    return(
        <div>
        <Header />
        <Switch>
            <Route exact path = '/' component = { Body } />
            <Route path = '/contact' component = { Contact }></Route>
            <Route></Route>
            <Route></Route>
        </Switch>
        <Footer />
        </div>
    )
}


export default App;