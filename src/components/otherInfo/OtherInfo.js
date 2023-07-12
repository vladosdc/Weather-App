import './otherInfo.scss'
import OtherInfoCards from "../otherInfoCards/OtherInfoCards";
import {useSelector} from "react-redux";

import temperatureIcon from "../../resources/temperature.png"
import humidityIcon from "../../resources/humidity.png"
import pressureIcon from "../../resources/pressure.png"
import windIcon from "../../resources/wind.png"
import visibilityIcon from "../../resources/visibility.png"
import airQualityIcon from "../../resources/airQuality.png"

const OtherInfo = () => {

    const data = {
        nameFeelsLike: "Feels Like",
        nameWind: "Wind Speed",
        nameHumidity: "Humidity",
        nameVisibility: "Visibility",
        namePressure: "Pressure",
        nameAirQuality: "Air Quality",

        descriptionFeelsLike: "The temperature you actually feel",
        descriptionWind: "Air movement velocity",
        descriptionHumidity: "Air humidity",
        descriptionVisibility: "The distance you can see clearly",
        descriptionPressure: "Normal pressure is 1013.25",
        descriptionAirQuality: "Air quality assessment",

        temperatureIcon: temperatureIcon,
        humidityIcon: humidityIcon,
        pressureIcon: pressureIcon,
        windIcon: windIcon,
        visibilityIcon: visibilityIcon,
        airQualityIcon: airQualityIcon

    }


    let airRating = ""

    const feelsLike = useSelector(state => state.feelsLike)
    const wind = useSelector(state => state.wind)
    const humidity = useSelector(state => state.humidity)
    const visibility = useSelector(state => state.visibility)
    const pressure = useSelector(state => state.pressure)
    const airQuality = useSelector(state => state.airQuality)


    switch (airQuality) {
        case 1:
            airRating = "Good"
            break
        case 2:
            airRating = "Moderate"
            break
        case 3:
            airRating = "Unhealthy for sensitive"
            break
        case 4:
            airRating = "Unhealthy"
            break
        case 5:
            airRating = "Very Unhealthy"
            break
        case 6:
            airRating = "Hazardous"
    }

    return (
        <div className="other-info">
            <div className="other-info__container">
                <p className="other-info__title">Other information</p>
                <div className="other-info__main-table">
                    <div className="other-info__table1">
                        <OtherInfoCards icon={data.temperatureIcon} name={data.nameFeelsLike} value={feelsLike + "°C"} description={data.descriptionFeelsLike}/>
                        <OtherInfoCards icon={data.humidityIcon} name={data.nameHumidity} value={humidity + "%"} description={data.descriptionHumidity}/>
                        <OtherInfoCards icon={data.pressureIcon} name={data.namePressure} value={pressure + "mb"} description={data.descriptionPressure}/>

                    </div>
                    <div className="other-info__table2">
                        <OtherInfoCards icon={data.windIcon} name={data.nameWind} value={wind + "km"} description={data.descriptionWind}/>
                        <OtherInfoCards icon={data.visibilityIcon} name={data.nameVisibility} value={visibility + "km"} description={data.descriptionVisibility}/>
                        <OtherInfoCards icon={data.airQualityIcon} name={data.nameAirQuality} value={airRating} description={data.descriptionAirQuality}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherInfo

