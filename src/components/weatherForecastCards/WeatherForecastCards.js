import {useSelector} from "react-redux";
import './weatherForecastCards.scss'
import SpinnerForForecast from "../spinnerForForecast/SpinnerForForecast";
const WeatherForecastCards = ({icon, day, avgTemperature, weatherTextStatus}) => {

    const loading = useSelector(state => state.loadingForecast)

    return (
        <div className="weather-card">
            {loading ? <SpinnerForForecast/> : null}
            <div className={loading ? "weather-card-table-loading" : "weather-card-table"}>
                <div className="weather-card__name-table">
                    <img className="weather-card__img" src={icon} alt={weatherTextStatus}/>
                    <p className="weather-card__name">{day}</p>
                </div>
                <div className="weather-card__table-main-info">
                    <p className="weather-card__value">{avgTemperature}°C - {weatherTextStatus}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherForecastCards