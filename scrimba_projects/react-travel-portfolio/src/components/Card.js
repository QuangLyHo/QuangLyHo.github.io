import React from "react";

export default function Card (props) {
    let {
        imageUrl, 
        title, 
        location, 
        googleMapsUrl, 
        startDate, 
        endDate, 
        description
    } = props

    return (
        <div className="card">
            <img className="card--img" src={imageUrl} alt='pic' />

            <div className="card--info">
                <h2 className="card--title">{title}</h2>

                <div className="card--location-info">
                    <p className="country">{location}</p>
                    <a className="location--url" href={googleMapsUrl}>View on Google Maps</a>
                </div>

                <div className="card--dates">
                    <strong>{startDate} - {endDate}</strong>
                </div>
                <p className="card--description">{description}</p>
            </div>
        </div>
    )
}