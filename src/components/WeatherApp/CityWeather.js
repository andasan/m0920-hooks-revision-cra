import React, {Component} from 'react';
import axios from 'axios';

class CityWeather extends Component {
    state = {}

    async componentDidMount(){
        this.getWeather();
    }

    componentDidUpdate(oldProps){
        if(oldProps.cityName !== this.props.cityName){
            this.getWeather();
        }
    }

    getWeather = async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        const resp = await axios.get(url);
        console.log(resp.data);
    }

    render(){
        const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`

        return(
            <div className="container">
            <h1>{this.props.cityName}</h1>
            {/* <div className="temp">{cityData.main.temp} <img src={iconUrl} /></div> */}
            </div>
        )
    }
}

export default CityWeather;
