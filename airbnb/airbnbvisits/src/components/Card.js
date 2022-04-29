import React from 'react'

export default function Card (props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props
    return (
        <div className="card">
            <img src={imageUrl} alt="ishimwe" />
            <div className="left">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{location}</h3>
                    <a href={googleMapsUrl} >View on google maps</a>
                </div>
                <h3>{title}</h3>
                <div className="details" >
                    <b>{startDate}-{endDate}</b>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}