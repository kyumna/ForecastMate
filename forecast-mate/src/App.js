import Search from './components/search/search'
import './App.css';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast'
import React from 'react';
import Animation from './components/animation/animation'


function App() {
  const [currentWeather, setCurrentWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast(forecastResponse)
      })
      .catch(err => {
        console.log(err)
      })
  }
  console.log(currentWeather)
  console.log(forecast)
  return (
    <div className="container">
      <div className='cloud'></div>

      <div className='search'>
        {<Search onSearchChange={handleOnSearchChange} />}</div>

      {currentWeather && <CurrentWeather data={currentWeather} />}



      {forecast && <Forecast data={forecast} />}
      <div className='clouds'></div>



    </div>

  );
}

export default App;