import React from 'react'
import { Link } from "react-router-dom"
import { withUser } from "./UserProvider"

const Header = () => {
    return(
        <div>
            <ul>
                <Link to = "/login">Login</Link> 
                <Link to = "/signup" >Sign Up</Link>
            </ul>

        </div>
    )
}

export default withQu