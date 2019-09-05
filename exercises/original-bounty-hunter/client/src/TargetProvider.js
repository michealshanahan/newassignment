import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

class TargetProvider extends Component{
    constructor(){
        super()
        this.state = {
            targets: [],
            jedi: true,
            alive: true

        }
    }
    toggle = (target) => {
        this.setState(prev => ({
             [target]: !prev[target] 
        }))
    }
    componentDidMount(){
        axios.get('/targets/').then(res => {
            this.setState({targets: res.data})
        })

    }

    render(){
        return(
            <Provider value={
                {...this.state,
                    toggle: this.toggle
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default TargetProvider
export const withTarget = (C) => {
    return(props) => 
        <Consumer>
            {value =>
            <C {...value} {...props} />}
        </Consumer>
}

