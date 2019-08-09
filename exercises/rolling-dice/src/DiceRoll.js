import React, {Component} from 'react'
import Dice from './Dice'

class DiceRoll extends Component {
    constructor(){
        super()
        this.setState = {
            dOne: 1,
            dTwo: 2,
            dThree: 3,
            dFour: 4,
            dFive: 5,
            dSix: 6
        }
    }
    roll = (){
        const odds = Math.floor(Math.random(*6))
        console.log(odds)

    }
    render(){
        return(
            <button onClick = {roll} >Roll</button>
        )
    }
}

export default DiceRoll