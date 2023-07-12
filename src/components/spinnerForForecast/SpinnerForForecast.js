import spinner from '../../resources/spinner.gif'
import './spinnerForForecast.scss'
const SpinnerForForecast = () => {
    return (
        <div className="spinner-for-forecast">
            <img className="spinner-for-forecast_img" src={spinner} alt="loading..."/>
        </div>
    )
}

export default SpinnerForForecast