import "./current-weather.css"

import React from 'react'

function CurrentWeather({ data }) {
    return (
        <div className="weather">
            <div className="top">
                <div className="multiple">
                    <div className="temp">{Math.round(data.main.temp)}°C</div>

                    <p className="city">{data.city}</p>
                    {/*<p className="description">{data.weather[0].description}</p>*/}
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>

            </div>
            <div className="bottom">


             
                    <div className="row">
                        <span className="value">{Math.round(data.main.feels_like)}<span className="no-bold">°C</span></span>
                        <span className="label">Feels like</span>
                    </div>
                    <div className="row">
                        <span className="value">{data.wind.speed}<span className="no-bold">mph</span></span>
                        <span className="label">Wind</span>
              
                </div>
                
                    <div className="row">
                        <span className="value">{data.main.humidity}<span className="no-bold">%</span></span>
                        <span className="label">Humidity</span>
                    </div>
                    <div className="row">
                        <span className="value">{data.main.pressure}<span className="no-bold">Pa</span></span>
                        <span className="label">Pressure</span>
                    </div>
                </div>
            </div>
        

    )
}

export default CurrentWeather