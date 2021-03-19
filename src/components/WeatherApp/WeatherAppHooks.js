import React, { useState } from 'react'
import CityWeatherHooks from './CityWeatherHooks'

const WeatherAppHooks = () => {
  const [city, setCity] = useState('')
  const [cityNameForWeather, setCityNameForWeather] = useState('')

  const changeCity = (e) => {
    setCity(e.target.value)
  }

  const citysearch = (e) => {
    e.preventDefault()
    setCityNameForWeather(city)
  }

  return (
    <div className='container'>
      <CityWeatherHooks cityName={cityNameForWeather} />
      <div className='row justify-content-center'>
        <form onSubmit={citysearch}>
          <input
            type='text'
            value={city}
            onChange={changeCity}
          />
          <input type='submit' className='btn btn-primary' value='Search!' />
        </form>
      </div>
    </div>
  )
}

export default WeatherAppHooks
