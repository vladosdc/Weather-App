import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    setCity,
    setCountry,
    setFeelsLikeTemperature,
    setHumidity,
    setTemperature,
    setVisibility,
    setWeatherIcon,
    setWeatherText,
    setWind,
    setPressure,
    setAirQuality,
    setRequestError,
    setLoading
} from "../actions/actions";

const WeatherService = ({searchValue}) => {
    const currentApi = process.env.REACT_APP_CURRENT_API_KEY
    const dispatch = useDispatch();

    useEffect(() => {

            if (searchValue.trim() === "") {
                return
            }

            const searchValueCheck = searchValue.trim().toLowerCase() === "kyiv" ? "kiev" : searchValue

            dispatch(setLoading(true))

            fetch(`${currentApi}&q=${searchValueCheck}&aqi=yes`)
                .then(res => res.json())
                .then(data => {

                    const current = data.current
                    const location = data.location

                    const weatherData = {
                        temperature: current.temp_c,
                        country: location.country,
                        city: location.name,
                        feelsLike: current.feelslike_c,
                        wind: current.wind_kph,
                        humidity: current.humidity,
                        visibility: current.vis_km,
                        weatherText: current.condition.text,
                        weatherIcon: current.condition.icon,
                        pressure: current.pressure_mb,
                        airQuality: current.air_quality["us-epa-index"]

                    }

                    dispatch(setTemperature(weatherData.temperature));
                    dispatch(setCountry(weatherData.country));
                    dispatch(setCity(weatherData.city));

                    dispatch(setFeelsLikeTemperature(weatherData.feelsLike));
                    dispatch(setWind(weatherData.wind));
                    dispatch(setHumidity(weatherData.humidity));

                    dispatch(setVisibility(weatherData.visibility));
                    dispatch(setWeatherText(weatherData.weatherText));
                    dispatch(setWeatherIcon(weatherData.weatherIcon));

                    dispatch(setPressure(weatherData.pressure));
                    dispatch(setAirQuality(weatherData.airQuality))

                    dispatch(setLoading(false))
                })
                .catch(error => {
                    dispatch(setLoading(false))
                    dispatch(setRequestError(true))
                });



    }, [searchValue.trim().toLowerCase(), dispatch])

    return null;
};

export default WeatherService;
