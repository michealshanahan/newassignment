import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './ThemeProvider'

import App from './App.js'

ReactDOM.render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
    , document.getElementById('root')
);
