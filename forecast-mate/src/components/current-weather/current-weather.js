import "./current-weather.css"

import React from 'react'

function CurrentWeather({data}) {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="description">{data.weather[0].description}</p>
                </div>

                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
            </div>
            <div className="bottom">
                <div className="temp">{Math.round(data.main.temp)}°C</div>
                <div className="details">
                    <div className="row">
                        <span className="label ">Details</span>
                    </div>
                    <div className="row">
                        <span className="label">Feels like</span>
                        <span className="value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="row">
                        <span className="label">Wind</span>
                        <span className="value">{data.wind.speed}</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity</span>
                        <span className="value">{data.main.humidity}</span>
                    </div>
                    <div className="row">
                        <span className="label">Pressure</span>
                        <span className="value">{data.main.pressure}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather