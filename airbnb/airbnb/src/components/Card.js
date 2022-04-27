import React from 'react'
import './css/Card.css'
export default function Card () {
    return (
        <div className="Card">
            <img src="//unsplash.it/500/500" alt="down images" />
            <div className="bottom-section">
                <div className="stars" >
                  <i className="fa-solid fa-star"></i>
                  <span> 5.0 (6)</span>
                  <li>USA</li>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b>/<small>person</small></p>
            </div>
        </div>
    )
}
