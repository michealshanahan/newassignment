import React from 'react'
import DiceRoll from './DiceRoll.js'

const App = () => {
    return(
        <div >
            <div className = 'header' >Roll Dice</div>
            <div className = 'header' >Click Dice to Keep Their Value</div>
            <DiceRoll />

        </div>
    )
}

export default App