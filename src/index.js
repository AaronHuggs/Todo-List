import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//Stylesheet
import "./functionBased/App.css"

//router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import About from './pages/About'
import NoMatch from './pages/NoMatch'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<TodoContainer />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='*' element={<NoMatch />}></Route>
            </Routes>
            
        </BrowserRouter> 
    </React.StrictMode>, 
    document.getElementById("root")
)