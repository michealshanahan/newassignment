import React, {Component} from 'react'
const { Consumer, Provider} = React.createContext()

class MyProvider extends Component {
    constructor (props){
        super()
        this.state = {
            dark: true
        }
    }
    toggle = () => {
        this.setState(prev =>{
            return{dark: !prev.dark}}
        )
    }
    render(){
        return(
            <Provider value = {{...this.state, toggle: this.toggle}}>
                    {this.props.children}
            </Provider>
        )
    }
}

export default MyProvider
export const withTheme = (Comp) => {
    return (props) => 
    <Consumer>
        {value => <Comp {...value}{...props}  /> }
    </Consumer>
}