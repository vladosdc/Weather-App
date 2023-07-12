import WeatherForecastCards from "../weatherForecastCards/WeatherForecastCards";
import {useSelector} from "react-redux";
import './weatherForecast.scss'
const WeatherForecast = () => {

    const day1 = useSelector(state => state.day1)
    const avgTemp1 = useSelector(state => state.avgTempDay1)
    const text1 = useSelector(state => state.textDay1)
    const icon1 = useSelector(state => state.iconDay1)

    const day2 = useSelector(state => state.day2)
    const avgTemp2 = useSelector(state => state.avgTempDay2)
    const text2 = useSelector(state => state.textDay2)
    const icon2 = useSelector(state => state.iconDay2)

    const day3 = useSelector(state => state.day3)
    const avgTemp3 = useSelector(state => state.avgTempDay3)
    const text3 = useSelector(state => state.textDay3)
    const icon3 = useSelector(state => state.iconDay3)
    return (
        <div className="weather-forecast">
            <div className="weather-forecast__container">
                <p className="weather-forecast__title">Weather forecast</p>
                <div className="weather-forecast__main-table">
                    <WeatherForecastCards icon={icon1} day={day1} avgTemperature={avgTemp1} weatherTextStatus={text1}/>
                    <WeatherForecastCards icon={icon2} day={day2} avgTemperature={avgTemp2} weatherTextStatus={text2}/>
                    <WeatherForecastCards icon={icon3} day={day3} avgTemperature={avgTemp3} weatherTextStatus={text3}/>
                </div>
            </div>
        </div>
    )
}

export default WeatherForecast