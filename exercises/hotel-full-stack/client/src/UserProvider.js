import React, { Component } from 'react'
const { Consumer, Provider } = React.createContext()

class UserProvider extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <Provider value = {{...this.state}} >
                {this.props.children}
            </Provider>
        )
    }
}

export default UserProvider
export const withReservations = (Comp) => {
    return (props ) => 
    <Consumer>
        {value => <Comp {...value } {...props} />}
    </Consumer>
}