import React, {Component} from 'react'

import DrinkProvider from './DrinkProvider.js'

class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (
            <DrinkProvider />
        )
    }
}

export default App