import React from 'react'

const Box = (props) => {
    const styles = {
        height: 60,
        background: props.color,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
    console.log(props)
    return(
        <div style = {styles}>
            <h2>
                {props.title}
            </h2>
            <h4>{props.subtitle}</h4>
            <p>{props.information}</p>
        </div>    
    )

}

export default Box