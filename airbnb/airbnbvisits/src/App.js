import React from "react";
import Card from './components/Card'
import NavBar from './components/NavBar'
import datasets from './data'

export default function App () {
    const elements = datasets.map(dataset=>{
        return (
            <Card key={dataset.id} {...dataset} />
        )
    })
    return (
        <div className='main'>
            <NavBar />
            {elements}
        </div>
    )
}