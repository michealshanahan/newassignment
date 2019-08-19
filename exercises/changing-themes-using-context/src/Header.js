import React from 'react'
import {Link} from 'react-router-dom'
import MyProvider from './ThemeProvider.js'

const Header = (props) => {
    return (
        <div className = {`${props.className}`} >
            <Link className = {props.className} to ='/'>Home</Link>
            <Link  className = {props.className} to = '/about'>About</Link>
            <Link className = {props.className} to = '/contact'>Contact Us</Link>
            <button className = {`button${props.value.dark}`} onClick = {props.value.toggle} >{props.value.dark ? 'Light Theme' : 'Dark Theme' }</button>
        </div>
    )
}
export default Header