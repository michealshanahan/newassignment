import React from 'react'
import { withTarget } from './TargetProvider.js'
import TargetCard from './TargetCard.js'

const Targets = (props) => {

    const mappedTargets = ()=> {
        return props.targets.map(target => <TargetCard target = {target} /> )
    }

    return(
        <div className = 'target-container'>
            <button onClick = {()=> console.log(props.targets)}>Targets Props</button>
            {mappedTargets()}
        </div>
    )
}



export default withTarget(Targets)