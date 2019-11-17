import React, { Component } from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            red: false
        }
    }

    toggleRed = () => {

        this.setState( prev => {
            prev.red = !prev.red
        })
    }
    
    render(){
        return(
            siteProvider 
        )
    }
    
}