import React from 'react'
import Names from './Names';

const Namesout = (props) => {
    return(
        props.names.map((name, index) => {
            return( <div className = 'names' key = {index} >{name}</div> )
        })
    )
}


export default Namesout