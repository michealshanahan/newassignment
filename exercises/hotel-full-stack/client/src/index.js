import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App.js'
import ReservationProvider from './ReservationProvider'
import UserProvider from './UserProvider'


ReactDOM.render(

    <UserProvider>
        <ReservationProvider >
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </ReservationProvider>
    </UserProvider>
    
    , document.getElementById('root'))