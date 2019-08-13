import React, {Component} from 'react'
import './styles.css'


class DiceRoll extends Component {
    constructor(){
        super()
        this.state = {
            dice: [ 0, 0, 0, 0, 0],
            clicked: [false, false, false, false, false]
        }
    }
    roll = () => {
        const odds = Math.floor(Math.random() * 6)
        return(odds)
    }
    
    
    reRoll = () => {
        let {clicked, dice} = this.state
        const newArray = []
        dice.map((die, index) => {
            clicked[index] ? newArray.push(die) :newArray.push(this.roll())
        }) 
            this.setState({dice: newArray})
    }
       
    toggleClicked = (index) => {
        let x = this.state.clicked.slice()
        x[index] = !x[index]
        this.setState({
            clicked: x
        })
    }
    rolledDice = () => {
        let {dice, clicked} = this.state
        return (dice.map((die, index) => {
            return(
                <div onClick = {()=>{this.toggleClicked(index)}} key = {index} className = {`clicked${clicked[index]} dice dice${dice[index]}`}></div>
            )
        })
        )    
    }
    
    render(){
        return(
            <div className = 'waste'>
                <div className = 'diceContainer'>
                    <this.rolledDice />
                </div>
                <input className = 'button' type="button" onClick = {this.reRoll} value = 'Roll'/>
            </div>

            
        )
    }
}

export default DiceRoll

