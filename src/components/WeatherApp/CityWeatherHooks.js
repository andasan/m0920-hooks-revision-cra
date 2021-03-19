import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CityWeatherHooks = (props) =>  {
    const [cityData, setCityData] = useState({})

    useEffect( () => {
        if(props.cityName){
            const getWeather = async() => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
                const resp = await axios.get(url);
                setCityData(resp.data)
            }

            getWeather()
        }


    }, [props.cityName])


    if(!cityData.weather){
        return(
            <h1>Loading.....</h1>
        )
    }

    const iconUrl = `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`

    return(
        <div className="container">
            <h1>{props.cityName}</h1>
            <div className="temp">{cityData.main.temp} <img src={iconUrl} alt="" /></div>
        </div>
    )
    
}

export default CityWeatherHooks;
