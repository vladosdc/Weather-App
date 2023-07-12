import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {

    setDay1,
    setAvgTempDay1,
    setTextDay1,
    setIconDay1,

    setDay2,
    setAvgTempDay2,
    setTextDay2,
    setIconDay2,

    setDay3,
    setAvgTempDay3,
    setTextDay3,
    setIconDay3,
    setLoadingForecast

} from "../actions/actions";
const WeatherForecastService = ({searchValue}) => {
    const forecastApi = process.env.REACT_APP_FORECAST_API_KEY
    const dispatch = useDispatch()


    useEffect(() => {

            if (searchValue.trim() === "") {
                return
            }

            const searchValueCheck = searchValue.trim().toLowerCase() === "kyiv" ? "kiev" : searchValue

            dispatch(setLoadingForecast(true))

            fetch(`${forecastApi}&q=${searchValueCheck}&days=3&aqi=no&alerts=no`)
                .then(res => res.json())
                .then(data => {

                    const dataQuery = data.forecast.forecastday[0].day
                    const dataQueryTwo = data.forecast.forecastday[1].day
                    const dataQueryThree = data.forecast.forecastday[2].day

                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                    const today = new Date()
                    const dayWeek1 = today.getDay()
                    const dayWeek2 = (today.getDay() + 1) % 7
                    const dayWeek3 = (today.getDay() + 2) % 7
                    const firstDay = days[dayWeek1]
                    const secondDay = days[dayWeek2]
                    const thirdDay = days[dayWeek3]

                    const forecastOneDay = {
                        day1: firstDay,
                        avgTemp1: dataQuery.avgtemp_c,
                        text1: dataQuery.condition.text,
                        icon1: dataQuery.condition.icon

                    }
                    const forecastTwoDay = {
                        day2: secondDay,
                        avgTemp2: dataQueryTwo.avgtemp_c,
                        text2: dataQueryTwo.condition.text,
                        icon2: dataQueryTwo.condition.icon

                    }
                    const forecastThreeDay = {
                        day3: thirdDay,
                        avgTemp3: dataQueryThree.avgtemp_c,
                        text3: dataQueryThree.condition.text,
                        icon3: dataQueryThree.condition.icon

                    }

                    dispatch(setDay1(forecastOneDay.day1))
                    dispatch(setAvgTempDay1(forecastOneDay.avgTemp1))
                    dispatch(setTextDay1(forecastOneDay.text1))
                    dispatch(setIconDay1(forecastOneDay.icon1))

                    dispatch(setDay2(forecastTwoDay.day2))
                    dispatch(setAvgTempDay2(forecastTwoDay.avgTemp2))
                    dispatch(setTextDay2(forecastTwoDay.text2))
                    dispatch(setIconDay2(forecastTwoDay.icon2))

                    dispatch(setDay3(forecastThreeDay.day3))
                    dispatch(setAvgTempDay3(forecastThreeDay.avgTemp3))
                    dispatch(setTextDay3(forecastThreeDay.text3))
                    dispatch(setIconDay3(forecastThreeDay.icon3))

                    dispatch(setLoadingForecast(false))


                })

                .catch(error => {
                    dispatch(setLoadingForecast(false))
                });



    }, [searchValue.trim().toLowerCase(), dispatch])

}

export default WeatherForecastService