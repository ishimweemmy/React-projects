import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'


export default function App() {
    return(
        <React.Fragment>
            <NavBar />
            <Hero />
            <Footer />
        </React.Fragment>
    )
}
