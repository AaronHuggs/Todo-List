import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//Stylesheet
import "./functionBased/App.css"

//router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoContainer />}></Route>
            </Routes>
            
        </BrowserRouter> 
    </React.StrictMode>, 
    document.getElementById("root")
)