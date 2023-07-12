import SearchField from "../searchField/SearchField";
import './app.scss'
import PhotoCities from "../photoCities/PhotoCities";
import OtherInfo from "../otherInfo/OtherInfo";
import WeatherForecast from "../weatherForecast/WeatherForecast";

const App = () => {
    return (
        <div className="app">
            <div className="app__container">
                <SearchField/>
                <PhotoCities/>
                <OtherInfo/>
                <WeatherForecast/>
            </div>
        </div>
    )
}

export default App