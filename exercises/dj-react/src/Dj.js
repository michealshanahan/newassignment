import React, {Component} from 'react'





class Dj extends Component {
    constructor(){
        super()
        this.state = {
            squareColor :[ 'black', 'white', 'green', 'white' ]
        }
    }
    blackWhite = (index) => {
        if(this.state.squareColor[0] === 'white'){
            this.setState(prev => {
                prev.squareColor = ['black', 'black', 'black', 'black']
                return {
                    squareColor: prev.squareColor
                }
            })
        }else{
            this.setState(prev => {
                prev.squareColor = ['white', 'white', 'white', 'white']
                return {
                    squareColor: prev.squareColor
                }
            })
        }
    }
    topCheck = (index) => {
        this.setState(prev => {
            prev.squareColor[0] = 'purple'
            prev.squareColor[1] = 'purple'
            return {
                squareColor: prev.squareColor
            }
        })
    }
    rightCheck = (index) => {
        this.setState(prev => {
            prev.squareColor[2] = 'blue'
            return {
                squareColor: prev.squareColor
            }
        })
    }
    leftCheck = (index) => {
        this.setState(prev => {
            prev.squareColor[3] = 'blue'

            return {
                squareColor: prev.squareColor
            }
        })
    }
    cageTime = () => {
        new Audio('word.wav')
    }
    crazyButton = (index) => {
        console.log(this.state)
        this.setState((prev) => {
            prev.squareColor[index] = 'url("data:image/jpeg;base64,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")'
            console.log(prev[index])
            return {squareColor: prev.squareColor}
        })
        
    }
    render(){

        const mappedArray = this.state.squareColor.map((square, index) => {
            return (
                <div className = 'squareContainer' key = { `squ${ index }` }>
                    <div key = {`square${index}`} style = {{background : square  }} onClick = {()=>{this.blackWhite()}} className = {`square square${(index)}`}>Square{index}</div>
                    <button onClick = { ()=>{this.crazyButton(index)} }>Click This</button> 
                </div>
            )
        })

        return(
            <div>
                { mappedArray }
                <button onClick= {() =>{{this.topCheck()}} }>Purple</button>
                <button onClick= {() =>{{this.rightCheck()}} }>Right Blue</button>
                <button onClick= {() =>{{this.leftCheck()}} }>left Blue</button>

            </div>
        )
    }
}



export default Dj