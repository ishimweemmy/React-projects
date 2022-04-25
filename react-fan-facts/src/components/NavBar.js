import './NavBar.css'
import React from 'react'
import logo from './../logo192.png'
export default function NavBar() {
    return (
        <div className="NavBar" >
            <div>
                <img src={logo} alt="ishimwe" />
                <h1>React Fun facts</h1>
            </div>
            <div>
                <h1>React projects-<small>Project 1</small></h1>
            </div>
        </div>
    )
}
