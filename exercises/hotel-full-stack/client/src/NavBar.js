import React from 'react'
import { Link } from "react-router-dom"
import { withUser } from "./UserProvider"

const Navbar = (props) => {
    return(
        <div className = "navbar-container">
            <ul className ="navbar-container" >
                <Link to = "/">Home</Link> 
                    {
                        !props.token ? 
                            <React.Fragment>
                                <Link to = "/login">Login</Link> 
                                <Link to = "/signup" >Sign Up</Link>
                            </React.Fragment>
                        :
                            <React.Fragment>

                                <button onClick = {props.logout }>Logout</button>
                            </React.Fragment>

                    }

                { props.isAdmin && <Link to = '/staffreservation'> Staff Reservations</Link> }
            </ul>

        </div>
    )
}

export default withUser( Navbar )