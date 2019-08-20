import React, {Component} from 'react'
import Axios from 'axios'

const {Consumer, Provider} = React.createContext()

class DrinkProvider extends Component{
    constructor(){
        super()
        this.state = {
            drinks: [],
            categories: []
        }
    }
    componentDidMount(){
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then(res => {
            console.log(res.data.drinks[0])
            this.setState({

            })
        })

    }
    render(){
        return(

        <div>class</div>
        )
    }

}

export default DrinkProvider
