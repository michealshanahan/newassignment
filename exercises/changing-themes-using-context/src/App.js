import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {withTheme} from './ThemeProvider.js'

import Home from './Home.js'
import Contact from './Contact.js'
import About from './About.js'
import Header from './Header.js'
import Footer from './Footer'

import './App.css'

const App = (props) => {
    let {dark} = props
    console.log(dark)
    return(
        <div>
            <Header value = {props}  className = {`dark${dark} header`} />
            <Switch >
                <Route exact path = '/' render = {(props) => <Home {...props} className = {`dark${dark} main`} />}/>
                <Route path = '/contact' render = {(props) => <Contact {...props} className = {`dark${dark} main`} /> }  />
                <Route path = '/about' render = {(props) => <About {...props} className = {`dark${dark} main`} /> } />
            </Switch>
            <Footer value = {props} className = {`dark${props.dark} footer`} />
            
        </div>
    )
}


export default withTheme(App)