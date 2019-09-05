import React from 'react'
import './TargetCard.css'

const TargetCard = (props) => {
    let { jedi, alive, bounty, firstName, lastName, imgUrl} = props.target
    const imgCheck = (imgUrl) => {
        if(imgUrl) return (<img className = 'target-image' src={imgUrl} /> )
    }
    return(
        <div className = {`jedi-${jedi} target-card`} >
            <div className = {`alive-${alive}`}></div>
            <button onClick = {()=>console.log(props.target.imgUrl)}>TargetCard Props</button>
            <div>{`Wanted Dead: ${firstName} ${lastName}`}</div>
            {imgCheck(imgUrl)}
            <span className = 'bounty' >${bounty}</span>
        </div>
    )
} 

export default TargetCard


