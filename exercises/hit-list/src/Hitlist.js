import React, {Component} from 'react'

import Axios from 'axios'



class Hitlist extends Component{
    constructor(){
        super()
        this.state = {
            targets: [{
                name: "swe"
            }],
            whacked: []
        }
    }
    componentDidMount(){
        Axios.get('http://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
            console.log(response)
           this.setState({
                targets: response.data
            })
        })
    }
    
    targetsMapped = () => {
        
        return this.state.targets.map((target, index) => {
            return (
                <div className = 'toWhack' key = {index}>
                    <div className = 'targets' style= {{background: `url('${target.image}')`, backgroundSize: 'cover'}} >{target.name}</div>
                    
                </div>
            )
        })
    }
    

    render(){
        console.log(this.state)
        return(
            this.targetsMapped()
        )
    }
}


export default Hitlist