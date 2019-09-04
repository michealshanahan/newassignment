import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext()

class TargetProvider extends Component{
    constructor(){
        super()
        this.state = {
            jedi: true,

        }
    }
    toggle = (target) => {
        this.setState(prev => ({
             target = !prev.target 
        }))
    }
    render(){
        return(
            <Provider value={{...this.state}}>
                {this.props.children}
            </Provider>
        )
    }
}

